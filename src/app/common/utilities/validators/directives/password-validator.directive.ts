import {
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS
} from "@angular/forms";
import { Directive } from "@angular/core";
import { passwordValidator } from "../functions/password-validate";

@Directive({
  selector: "[passwordValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator()(control);
  }
}
