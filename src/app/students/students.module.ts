import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsRoutingModule } from "./students-routing.module";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentsComponent } from "./student-list/students.component";
import { StudentResolver } from "./student.resolve";
import { StudentsService } from "./students.service";
import { CustomPipesModule } from "../common/pipe/custom-pipes.module";

@NgModule({
  imports: [CommonModule, StudentsRoutingModule, CustomPipesModule],
  declarations: [StudentsComponent, StudentDetailsComponent],
  providers: [StudentsService, StudentResolver]
})
export class StudentsModule {}
