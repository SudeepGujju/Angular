import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { CreateCustomErrorObject } from "../common/Error/create.custom.error.object";
import { take, catchError, tap } from "rxjs/operators";
import { AuthService } from "../common/sevices/auth.service";


//@Injectable()
export class VidlyDataService {

  constructor(
    private url: string,
    private http: HttpClient,
    private authService: AuthService
  ) {
    console.log(url);
  }

  get(id) {
    return this.http.get(this.url + "/" + id).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  getAll() {
    return this.http.get(this.url).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource), {
        headers: this.authService.JsonHeaderForReq
      })
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }
  /* @Need to refractor */
  update(resource, id) {
    return this.http
      .put(this.url + "/" + id, resource, {
        headers: this.authService.FormDataHeaderForReq
      })
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete(this.url + "/" + id, {
        headers: this.authService.JsonHeaderForReq
      })
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse) {
    //return throwError(CreateCustomErrorObject.getCustomErrorObject(err));
    return CreateCustomErrorObject.getCustomErrorObject2(err);
  }
}
