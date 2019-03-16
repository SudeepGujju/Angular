import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentsComponent } from "./student-list/students.component";
import { AdminAuthGuard } from "../common/sevices/admin-auth-guard";
import { AuthGuard } from "../common/sevices/auth-guard";
import { StudentResolver } from "./student.resolve";

const routes: Routes = [
  {
    path: "students/:id",
    component: StudentDetailsComponent,
    data: { animation: "student" },
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: "students",
    component: StudentsComponent,
    data: { animation: "students" },
    canActivate: [AuthGuard, AdminAuthGuard],
    resolve: {
      student: StudentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
