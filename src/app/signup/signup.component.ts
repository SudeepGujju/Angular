import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "./signup.service";
import { AppError } from "../common/Error/app-error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { ConnectionError } from "../common/Error/connection.error";
import { emailValidator } from "../common/utilities/validators/functions/email-validator";
import { passwordValidator } from "../common/utilities/validators/functions/password-validate";
import { comparePasswords } from "../common/utilities/validators/functions/compare-password";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  profileForm;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group(
      {
        name: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, emailValidator()]],
        password: [
          "",
          [Validators.required, Validators.minLength(8), passwordValidator()]
        ],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
        phone: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ]
      },
      {
        validators: comparePasswords()
      }
    );
  }

  get email() {
    return this.profileForm.get("email") as FormControl;
  }

  signUp() {
    const profileValues = this.profileForm.value;

    if (profileValues.password != profileValues.confirmPassword) {
      this.profileForm.setErrors({ InvalidPassword: true });
      return false;
    }

    delete profileValues.confirmPassword;

    this.userService.register(profileValues).subscribe(data => {
      alert("SignUp successful");
      this.profileForm.reset();
      this.router.navigateByUrl("/login");
    }, this.localErrorMessage);
  }

  localErrorMessage(err) {
    if (err instanceof ConnectionError) alert("Unable to establish connection");
    else if (err instanceof BadRequestError) alert("Invalid input details");
    else if (err instanceof NotFoundError) alert("Requested details not found");
    else if (err instanceof AppError) throw err;
  }
}
