import { Component, OnInit } from "@angular/core";
import { StudentsService } from "./students.service";
import { Student } from "./Student.Interface";
import { map, retry, tap } from "rxjs/operators";
import { AppError } from "../common/Error/app-error";
import { BadRequestError } from "../common/Error/bad-input-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { ConnectionError } from "../common/Error/connection.error";
import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  StudentsList: Student[];
  student: Student;
  constructor(private SS: StudentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.route);
    // this.SS.getAll()
    this.route.data.pipe(tap(console.log)).subscribe(data => {
      this.StudentsList = data.student;
    }, this.localErrorMessage);
  }
  /*
  getStudent(id) {
    this.SS.get(id).subscribe((data: any) => {
      this.student = data[0];
    }, this.localErrorMessage);
  }
*/
  localErrorMessage(err) {
    if (err instanceof ConnectionError) alert("Unable to establish connection");
    else if (err instanceof BadRequestError) alert("Invalid input details");
    else if (err instanceof NotFoundError) alert("Requested details not found");
    else if (err instanceof AppError) throw err;
  }
}
