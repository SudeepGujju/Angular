import { Observable } from "rxjs";

export interface CustomError {
  errorMessage: string;
  errorInstance: Observable<never>;
}
