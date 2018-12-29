import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-invalidurl",
  templateUrl: "./invalidurl.component.html",
  styleUrls: ["./invalidurl.component.css"]
})
export class InvalidurlComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.route.navigate(["/"]);
    }, 1000);
  }
}
