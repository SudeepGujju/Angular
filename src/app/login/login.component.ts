import { Component, OnInit } from "@angular/core";
import { AuthService } from "../common/sevices/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomError } from "../common/Error/custom.error";
import { ConnectionError } from "../common/Error/connection.error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { AppError } from "../common/Error/app-error";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  invalidLogin;
  errorMsg: string;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  signIn(credentials) {
    this.AuthService.login(credentials).subscribe(
      result => {
        if (result) {
          let returnUrl = this.activatedRoute.snapshot.queryParamMap.get(
            "returnUrl"
          );
          this.router.navigateByUrl(returnUrl || "/");
        } //else this.invalidLogin = true;
      },
      error => {
        this.parseCustomErrorObject(error);
      }
    );
  }

  parseCustomErrorObject(customError) {
    //console.log(customError);
    if (customError.errorMessage) this.errorMsg = customError.errorMessage;
    else {
      let err = customError.errorInstance;

      if (err instanceof ConnectionError)
        this.errorMsg = "Unable to establish connection";
      else if (err instanceof BadRequestError)
        this.errorMsg = "Invalid input details";
      else if (err instanceof NotFoundError)
        this.errorMsg = "Requested details not found";
      else if (err instanceof AppError) throw err;
      /* @Uncomment if alerts are required

      if (err instanceof ConnectionError)
        alert("Unable to establish connection");
      else if (err instanceof BadRequestError) alert("Invalid input details");
      else if (err instanceof NotFoundError)
        alert("Requested details not found");
      else if (err instanceof AppError) throw err; */
    }
  }
}
