import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentsService } from "../students/students.service";
import { ConnectionError } from "../common/Error/connection.error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { AppError } from "../common/Error/app-error";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"]
})
export class StudentDetailsComponent implements OnInit {
  //@Input() student;

  student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private SS: StudentsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    let currentValue = changes.previosValue;
    console.log(changes, "helle");
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));

    this.activatedRoute.paramMap.subscribe(paramsAsMap => {
      let id = paramsAsMap.get("id");
      this.getStudent(id);
    });
  }

  getStudent(id) {
    this.SS.get(id).subscribe((data: any) => {
      this.student = data[0];
    }, this.localErrorMessage);
  }

  viewAll() {
    this.router.navigateByUrl("/students");
  }

  localErrorMessage(err) {
    if (err instanceof ConnectionError) alert("Unable to establish connection");
    else if (err instanceof BadRequestError) alert("Invalid input details");
    else if (err instanceof NotFoundError) alert("Requested details not found");
    else if (err instanceof AppError) throw err;
  }

  ngOnDestory() {
    console.log("Destroyed Component");
  }
}
