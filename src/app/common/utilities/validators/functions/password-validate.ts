import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { passwordRegExp } from "../validation-patterns";

export function passwordValidator(): ValidatorFn {
  return function(control: AbstractControl): ValidationErrors | null {
    let value = control.value as string;

    if (!passwordRegExp.test(value)) {
      return { invalidPassword: true };
    }

    return null;
  };
}
