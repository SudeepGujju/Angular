import { Component } from "@angular/core";
import { slideInAmination } from "./animation";
import { AuthService } from "./common/sevices/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAmination]
})
export class AppComponent {
  title = "AngularApp";

  constructor(public authService: AuthService) { }
  getAnimtionData(outlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
