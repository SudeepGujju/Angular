import { Component, OnInit } from "@angular/core";
import { AuthService } from "../common/sevices/auth.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private AuthService: AuthService) {}

  navBarColor;
  ngOnInit() {
    this.navBarColor = environment.navBarColor;
  }
}
