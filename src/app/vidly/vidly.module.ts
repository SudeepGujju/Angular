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

@NgModule({
  imports: [CommonModule, VidlyRoutingModule, FormsModule],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    VidlyHomeComponent,
    GenreListComponent,
    GenreDetailComponent,
    GenresComponent
  ],
  providers: [MovieService, GenreService]
})
export class VidlyModule {}
