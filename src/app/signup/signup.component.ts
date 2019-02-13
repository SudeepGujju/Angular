import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./signup.service";
import { AppError } from "../common/Error/app-error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { ConnectionError } from "../common/Error/connection.error";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  profileForm;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ["sudeep", [Validators.required, Validators.minLength(5)]],
      email: ["sudeep@gm", [Validators.required, Validators.email]],
      password: ["1452369877", [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        "1452369877",
        [Validators.required, Validators.minLength(8)]
      ],
      phone: [
        "9874563210",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    });
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
    }, this.localErrorMessage);
  }

  localErrorMessage(err) {
    if (err instanceof ConnectionError) alert("Unable to establish connection");
    else if (err instanceof BadRequestError) alert("Invalid input details");
    else if (err instanceof NotFoundError) alert("Requested details not found");
    else if (err instanceof AppError) throw err;
  }
}
