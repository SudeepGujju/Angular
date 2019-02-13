import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../Error/app-error";
import { BadRequestError } from "../Error/bad-input-error";
import { NotFoundError } from "../Error/not-found-error";
import { ConnectionError } from "../Error/connection.error";
import { AuthService } from "./auth.service";

@Injectable()
export class DataService {
  //private url = "http://localhost:6800/Students";

  constructor(
    private url: string,
    private http: HttpClient,
    private isAuthReq: boolean,
    private authService: AuthService
  ) {}

  getAll() {
    return this.http.get(this.url, { headers: this.getAuthHeader() }).pipe(
      tap(this.log, this.log),
      catchError(this.handleError)
    );
  }

  get(id) {
    return this.http.get(this.url + "/" + id).pipe(
      tap(this.log),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      tap(this.log),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http
      .patch(this.url + "/" + resource.id, JSON.stringify({ title: "UPDATED" }))
      .pipe(
        tap(this.log),
        catchError(this.handleError)
      );
  }

  delete(id) {
    this.http.delete(this.url + id).pipe(
      tap(this.log),
      catchError(this.handleError)
    );
  }

  private handleError(err: Response) {
    //console.log(err);
    //console.log(err.status, "Status Code");
    if (err.status == 0) return throwError(new ConnectionError(err));
    else if (err.status == 400) return throwError(new BadRequestError(err));
    else if (err.status == 404) return throwError(new NotFoundError(err));
    return throwError(new AppError(err));
  }

  private getAuthHeader(): HttpHeaders {
    if (this.isAuthReq) {
      let token = this.authService.getToken();
      let httpHeader = new HttpHeaders({ Authorization: "Bearer " + token });
      return httpHeader;
    }
    return null;
  }

  private log(data) {
    // console.log("Logging > " + JSON.parse(data));
  }
}
