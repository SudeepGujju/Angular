import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { DetailsComponent } from "./details/details.component";

import { ListComponentComponent } from "./list-component/list-component.component";
import { LikeComponent } from "./like/like.component";
import { JSONPLACEComponent } from "./jsonplace/jsonplace.component";

import { MainService } from "./main/main.service";
import { CustomService } from "./service/custom.service";
import { PostService } from "./jsonplace/post.service";
import { DataService } from "./common/sevices/data-service";

import { AgePipe } from "./pipe/age.pipe";
import { CustomTitlePipe } from "./pipe/custom-title.pipe";

import { FormatDirective } from "./directives/format.directive";

import { StudentsComponent } from "./students/students.component";
import { StudentsService } from "./students/students.service";

import { RouterModule } from "@angular/router";

import { MyErrorHandler } from "./common/Error/app-error-handler";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { AddsComponent } from "./adds/adds.component";
import { AdDirective } from "./adds/ad.directive";
import { AddsComponents } from "./adds/ad.template";
import { AddsService } from "./adds/adds.service";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./common/sevices/auth.service";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./common/sevices/auth-guard";
import { InvalidurlComponent } from "./invalidurl/invalidurl.component";
import { NoAccessComponent } from "./no-access/no-access.component";
import { AdminAuthGuard } from "./common/sevices/admin-auth-guard";
import { StudentResolver } from "./students/student.resolve";
import { SignupComponent } from "./signup/signup.component";

import { UserService } from "./signup/signup.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ListComponentComponent,
    AgePipe,
    CustomTitlePipe,
    LikeComponent,
    FormatDirective,
    JSONPLACEComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AddsComponent,
    AdDirective,
    AddsComponents,
    HomeComponent,
    LoginComponent,
    InvalidurlComponent,
    NoAccessComponent,
    SignupComponent
  ],
  entryComponents: AddsComponents,
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HomeComponent
        },
        {
          path: "login",
          component: LoginComponent
        },
        {
          path: "signUp",
          component: SignupComponent
        },
        {
          path: "students/:id",
          component: StudentDetailsComponent,
          canActivate: [AuthGuard, AdminAuthGuard]
        },
        {
          path: "students",
          component: StudentsComponent,
          canActivate: [AuthGuard, AdminAuthGuard],
          resolve: {
            student: StudentResolver
          }
        },
        {
          path: "noaccess",
          component: NoAccessComponent
        },
        { path: "**", component: InvalidurlComponent }
      ]
      //,{ enableTracing: true }
    )
  ],
  providers: [
    UserService,
    MainService,
    CustomService,
    PostService,
    StudentsService,
    DataService,
    AddsService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    StudentResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
