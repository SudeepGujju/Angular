import { Injectable } from "@angular/core";
import { StudentsService } from "./students.service";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Student } from "./Student.Interface";
import { map } from "rxjs/operators";

@Injectable()
export class StudentResolver implements Resolve<Student[]> {
  constructor(private SS: StudentsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.SS.getAll().pipe(
      map((data: Student[]) => {
        return data
          .filter(data => data.Name !== "Unknown")
          .map(d => {
            return { Name: d.Name, ID: d.ID };
          });
      })
    );
  }
}
