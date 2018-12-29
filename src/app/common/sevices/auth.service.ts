import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  helper;

  constructor(private http: HttpClient) {
    this.helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (token) this.currentUser = this.helper.decodeToken(token);
  }

  url = "http://localhost:6200/authenticate";

  currentUser: Token = null;

  login(userCredentials) {
    return this.http.post(this.url, userCredentials).pipe(
      map((response: Token) => {
        if (response && response.token) {
          let token = response.token;
          localStorage.setItem("token", token);
          this.currentUser = this.helper.decodeToken(token);
          return true;
        } else return false;
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.currentUser = null;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    //if (!token) return false;

    //const isExpired = this.helper.isTokenExpired(token);
    //const s = helper.getTokenExpirationDate(token);
    //return !isExpired;
    return this.currentUser ? true : false;
  }

  getToken() {
    return localStorage.getItem("token");
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
  admin?: boolean;
}
