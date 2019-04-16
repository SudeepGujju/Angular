import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VidlyHomeComponent } from "./vidly-home/vidly-home.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { GenreListComponent } from "./genres/genre-list/genre-list.component";
import { GenreDetailComponent } from "./genres/genre-detail/genre-detail.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { GenresComponent } from "./genres/genres.component";
import { AdminAuthGuard } from "../common/sevices/admin-auth-guard";
import { AuthGuard } from "../common/sevices/auth-guard";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  {
    path: "vidly",
    component: VidlyHomeComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
    children: [
      {
        path: "genres",
        component: GenresComponent,
        canActivateChild: [AuthGuard, AdminAuthGuard],
        children: [
          {
            path: ":id",
            component: GenreDetailComponent
          },
          {
            path: "",
            component: GenreListComponent
          }
        ]
      },
      {
        path: "movies",
        component: MoviesComponent,
        canActivateChild: [AuthGuard, AdminAuthGuard],
        children: [
          {
            path: "detail",
            component: MovieDetailComponent
          },
          {
            path: "",
            component: MovieListComponent
          }
        ]
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VidlyRoutingModule { }
