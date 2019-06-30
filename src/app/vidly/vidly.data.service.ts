import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { CreateCustomErrorObject } from "../common/Error/create.custom.error.object";
import { take, catchError } from "rxjs/operators";
import { AuthService } from "../common/sevices/auth.service";


//@Injectable()
export class VidlyDataService {

  constructor(
    private url: string,
    private http: HttpClient,
    private authService: AuthService
  ) {
    //console.log(url);
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
      .post(this.url, resource, {
        headers: this.authService.FormDataHeaderForReq
      })
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }
  /* @Need to refractor */
  update(resource, id?) {

    let url = this.url + "/";

    if (id)
      url += id;
    else
      url += resource.id;

    return this.http
      .put(url, resource, {
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
