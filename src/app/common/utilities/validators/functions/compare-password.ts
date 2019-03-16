import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function comparePasswords(): ValidatorFn {
  return (Group: AbstractControl): ValidationErrors | null => {
    const password = Group.get("password").value;
    const confirmPassword = Group.get("confirmPassword").value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  };
}
