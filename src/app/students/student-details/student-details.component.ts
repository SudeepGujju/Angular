import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentsService } from "../students.service";
import { ConnectionError } from "../../common/Error/connection.error";
import { BadRequestError } from "../../common/Error/bad-input-error";
import { NotFoundError } from "../../common/Error/not-found-error";
import { AppError } from "../../common/Error/app-error";
import { switchMap, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { Student } from "../Student.Interface";

@Component({
  selector: "student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"]
})
export class StudentDetailsComponent implements OnInit {
  //@Input() student;

  student$: Observable<Student>;

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
    //console.log(this.activatedRoute.snapshot.paramMap.get("id"));

    this.student$ = this.activatedRoute.paramMap.pipe(
      switchMap(paramsAsMap => {
        let id = paramsAsMap.get("id");
        return this.SS.get(id);
      })
      //catchError(this.localErrorMessage)
    );
    // .subscribe(paramsAsMap => {
    //   let id = paramsAsMap.get("id");
    //   this.getStudent(id);
    // });
  }

  // getStudent(id) {
  //   this.SS.get(id).subscribe((data: any) => {
  //     this.student = data;
  //   }, this.localErrorMessage);
  // }

  viewAll(id) {
    //this.router.navigateByUrl("/students");
    this.router.navigate(["/students", { id }], {
      relativeTo: this.activatedRoute
    });
  }

  localErrorMessage(err) {
    if (err instanceof ConnectionError) alert("Unable to establish connection");
    else if (err instanceof BadRequestError) alert("Invalid input details");
    else if (err instanceof NotFoundError) alert("Requested details not found");
    else if (err instanceof AppError) throw err;
  }

  ngOnDestroy() {
    console.log("Destroyed Component");
  }
}
