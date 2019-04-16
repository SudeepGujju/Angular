import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VidlyRoutingModule } from "./vidly-routing.module";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { VidlyHomeComponent } from "./vidly-home/vidly-home.component";
import { GenreListComponent } from "./genres/genre-list/genre-list.component";
import { GenreDetailComponent } from "./genres/genre-detail/genre-detail.component";
import { MovieService } from "./movies/movie.service";
import { GenreService } from "./genres/genre.service";
import { GenresComponent } from "./genres/genres.component";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { MoviesComponent } from "./movies/movies.component";
import { SortablejsModule } from "angular-sortablejs";

@NgModule({
  imports: [CommonModule, VidlyRoutingModule, FormsModule, SortablejsModule],
  declarations: [
    DashboardComponent,
    MovieListComponent,
    MovieDetailComponent,
    VidlyHomeComponent,
    GenreListComponent,
    GenreDetailComponent,
    GenresComponent,
    MoviesComponent
  ],
  providers: [MovieService, GenreService]
})
export class VidlyModule { }
