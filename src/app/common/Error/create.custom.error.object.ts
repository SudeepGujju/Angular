import { throwError, Observable } from "rxjs";
import { ConnectionError } from "./connection.error";
import { BadRequestError } from "./bad-input-error";
import { NotFoundError } from "./not-found-error";
import { AppError } from "./app-error";
import { HttpErrorResponse } from "@angular/common/http";
import { CustomError } from "./custom.error";

export class CreateCustomErrorObject {
  static getCustomErrorObject(err: HttpErrorResponse): CustomError {
    /* console.log(err);
    console.log(err instanceof ErrorEvent); */

    return {
      errorMessage: err.error instanceof ProgressEvent ? null : err.error,
      errorInstance: CreateCustomErrorObject.classifyError(err)
    };
  }

  static classifyError(err: HttpErrorResponse) {
    if (err.status == 0) return throwError(new ConnectionError(err));
    else if (err.status == 400) return throwError(new BadRequestError(err));
    else if (err.status == 404) return throwError(new NotFoundError(err));
    return throwError(new AppError(err));
  }

  static getCustomErrorObject2(err: HttpErrorResponse): Observable<never> {
    const errorObj: any = Object.create({});

    errorObj.errorMessage =
      err.error instanceof ProgressEvent ? null : err.error;

    if (err.status == 0) errorObj.errorInstance = new ConnectionError(err);
    else if (err.status == 400)
      errorObj.errorInstance = new BadRequestError(err);
    else if (err.status == 404) errorObj.errorInstance = new NotFoundError(err);
    else errorObj.errorInstance = new AppError(err);

    return throwError(errorObj);
  }
}
