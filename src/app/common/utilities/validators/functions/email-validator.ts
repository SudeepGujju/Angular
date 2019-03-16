import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";
import { emailRegExp } from "../validation-patterns";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value as string;

    if (!emailRegExp.test(value)) return { InvalidEmail: true };

    return null;
  };
}
