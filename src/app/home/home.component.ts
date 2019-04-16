import { Component, OnInit } from "@angular/core";
import { AuthService } from "../common/sevices/auth.service";
import { environment } from "../../environments/environment";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) { }

  navBarColor;
  ngOnInit() {
    this.navBarColor = environment.navBarColor;
    //console.log(this.AuthService.isLoggedIn());
    /* this.AuthService.isLoggedIn()
      ? location.assign("")
      : location.assign("login"); */
    //if (!this.AuthService.isLoggedIn()) location.assign("login");
    if (!this.AuthService.isLoggedIn()) this.router.navigateByUrl("/login");

  }
}
