import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/Error/app-error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { ConnectionError } from "../common/Error/connection.error";

@Injectable()
export class UserService {
  private url = "http://localhost:6800/users";

  constructor(private http: HttpClient) { }

  register(profile) {
    return this.http.post(this.url, profile).pipe(catchError(this.handleError));
  }

  private handleError(err: Response) {
    if (err.status == 0) return throwError(new ConnectionError(err));
    else if (err.status == 400) return throwError(new BadRequestError(err));
    else if (err.status == 404) return throwError(new NotFoundError(err));
    return throwError(new AppError(err));
  }
}
