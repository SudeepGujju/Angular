import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VidlyHomeComponent } from "./vidly-home/vidly-home.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { GenreListComponent } from "./genres/genre-list/genre-list.component";
import { GenreDetailComponent } from "./genres/genre-detail/genre-detail.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { GenresComponent } from "./genres/genres.component";

const routes: Routes = [
  {
    path: "vidly",
    component: VidlyHomeComponent,
    children: [
      {
        path: "genres",
        component: GenresComponent,
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
        component: MovieListComponent,
        children: [
          {
            path: ":id",
            component: MovieDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VidlyRoutingModule {}
