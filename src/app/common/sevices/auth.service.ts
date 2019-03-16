import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { map, catchError, take } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";
import { CreateCustomErrorObject } from "../Error/create.custom.error.object";
import { authHeader } from "../configuration/config";
/*import { Location } from "@angular/common";*/

@Injectable()
export class AuthService {
  jwtHelper;

  constructor(private http: HttpClient /*, private location: Location*/) {
    this.jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (token) this.decodeTokenAndSetUser(token);
  }

  //url = "http://localhost:6200/authenticate";
  url = environment.serverUrl + "auth";

  currentUser: Token = null;

  login(userCredentials) {
    return this.http
      .post(this.url, userCredentials, {
        observe: "response"
      })
      .pipe(
        take(1),
        catchError(this.handleError),
        map(response => {
          const token = response.headers.get(authHeader);

          if (token) {
            localStorage.setItem("token", token);
            this.decodeTokenAndSetUser(token);
            return true;
          }
          return false;

          // if (response && response.token) {
          //   let token = response.token;
          //   localStorage.setItem("token", token);
          //   this.currentUser = this.jwtHelper.decodeToken(token);
          //   return true;
          // } else return false;
        })
      );
  }

  decodeTokenAndSetUser(token) {
    if (token) {
      this.currentUser = this.jwtHelper.decodeToken(token);
      // console.log(this.jwtHelper.decodeToken(token));
    }
  }

  logout() {
    //this.location.go("");
    window.location.href = "/"; // Need to change this line
    localStorage.removeItem("token");
    this.currentUser = null;
  }

  handleError(err: HttpErrorResponse) {
    //return throwError(CreateCustomErrorObject.getCustomErrorObject(err));
    return CreateCustomErrorObject.getCustomErrorObject2(err);
  }

  /* @ Need to refractor */
  isLoggedIn() {
    let token = localStorage.getItem("token");

    let validToken: boolean = false;
    //if (!token) return false;

    //const isExpired = this.helper.isTokenExpired(token);
    //const s = helper.getTokenExpirationDate(token);
    //return !isExpired;
    //console.log(this.jwtHelper.isTokenExpired(token));
    //console.log(this.jwtHelper.getTokenExpirationDate(token));
    if (token) {
      validToken = this.isTokenValid(token);
    }

    // if (validToken) this.decodeTokenAndSetUser(token);
    // else this.currentUser = null;

    if (!validToken) this.currentUser = null;

    return validToken;
  }

  isTokenValid(token) {
    if (token) {
      const isTokenExpired = this.jwtHelper.isTokenExpired(token);
      //console.log(this.jwtHelper.isTokenExpired(token) + " > Expired");
      return !isTokenExpired;
    } else return false;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  // get HeaderForReq() {
  //   return this.isLoggedIn()
  //     ? new HttpHeaders({ [authHeader]: localStorage.getItem("token") })
  //     : this.logout();
  // }

  get headerForReq() {
    return new HttpHeaders({
      [authHeader]: localStorage.getItem("token"),
      ["Content-Type"]: "application/json"
    });
  }
  /*
  getCurrentuser() {
    let token = localStorage.getItem("token");
    if (!token) return null;

    return this.helper.decodeToken(token);
  }*/
}
interface Token {
  token: string;
  isAdmin?: boolean;
  name: string;
}
