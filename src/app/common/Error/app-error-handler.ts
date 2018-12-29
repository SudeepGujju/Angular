import { ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class MyErrorHandler implements ErrorHandler {
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("if", error.error.message);
    } else {
      if (error.status === 0) {
        alert("unable to connect to server");
      }
      console.error("else", error);
    }
    return throwError("error occured due to some failure");
  }
}
