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

import { FormatDirective } from "./directives/format.directive";

import { RouterModule } from "@angular/router";

import { MyErrorHandler } from "./common/Error/app-error-handler";
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
import { SignupComponent } from "./signup/signup.component";

import { UserService } from "./signup/signup.service";
import { VidlyModule } from "./vidly/vidly.module";
import { EmailValidatorDirective } from "./common/utilities/validators/directives/email-validator.directive";
import { PasswordValidatorDirective } from "./common/utilities/validators/directives/password-validator.directive";
import { StudentsModule } from "./students/students.module";
import { CustomPipesModule } from "./common/pipe/custom-pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ListComponentComponent,
    LikeComponent,
    FormatDirective,
    JSONPLACEComponent,
    AddsComponent,
    AdDirective,
    AddsComponents,
    HomeComponent,
    LoginComponent,
    InvalidurlComponent,
    NoAccessComponent,
    SignupComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective
  ],
  entryComponents: AddsComponents,
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomPipesModule,
    VidlyModule,
    StudentsModule,
    RouterModule.forRoot(
      [
        {
          path: "login",
          component: LoginComponent
        },
        /* {
          path: "main",
          component: MainComponent
        }, */
        {
          path: "signUp",
          component: SignupComponent
        },
        {
          path: "noaccess",
          component: NoAccessComponent
        },
        {
          path: "",
          component: HomeComponent
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
    DataService,
    AddsService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    AuthService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
