import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { CreateCustomErrorObject } from "../common/Error/create.custom.error.object";
import { take } from "rxjs/operators";
import { AuthService } from "../common/sevices/auth.service";

@Injectable()
export class VidlyDataService {
  constructor(
    private url: string,
    private http: HttpClient,
    private authService: AuthService
  ) {
    console.log(url);
  }

  get(id) {
    return this.http.get(this.url + "/" + id).pipe(take(1));
  }

  getAll() {
    return this.http.get(this.url).pipe(take(1));
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource), {
        headers: this.authService.headerForReq
      })
      .pipe(take(1));
  }
  /* @Need to refractor */
  update(resource) {
    const { id } = resource;
    delete resource.id;
    return this.http
      .put(this.url + "/" + id, JSON.stringify(resource), {
        headers: this.authService.headerForReq
      })
      .pipe(take(1));
  }

  delete(id) {
    return this.http
      .delete(this.url + "/" + id, {
        headers: this.authService.headerForReq
      })
      .pipe(take(1));
  }

  handleError(err: HttpErrorResponse) {
    //return throwError(CreateCustomErrorObject.getCustomErrorObject(err));
    return CreateCustomErrorObject.getCustomErrorObject2(err);
  }
}
