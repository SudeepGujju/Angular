import { Component, OnInit } from "@angular/core";
import { AuthService } from "../common/sevices/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  invalidLogin;

  signIn(credentials) {
    this.AuthService.login(credentials).subscribe(result => {
      if (result) {
        let returnUrl = this.activatedRoute.snapshot.queryParamMap.get(
          "returnUrl"
        );
        this.invalidLogin = false;
        this.router.navigateByUrl(returnUrl || "/");
      } else this.invalidLogin = true;
    });
  }
}
