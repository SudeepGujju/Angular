import { throwError } from "rxjs";
import { AppError } from "./app-error";
import { BadRequestError } from "./bad-input-error";
import { NotFoundError } from "./not-found-error";
import { ConnectionError } from "./connection.error";

export class handleError {
  constructor(err: Response) {
    console.log(err);
    console.log(err.status, "Status Code");
    if (err.status == 0) return throwError(new ConnectionError(err));
    else if (err.status == 400) return throwError(new BadRequestError(err));
    else if (err.status == 404) return throwError(new NotFoundError(err));
    return throwError(new AppError(err));
  }
}
