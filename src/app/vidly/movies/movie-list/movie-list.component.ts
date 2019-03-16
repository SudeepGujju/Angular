import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  private MoviesList$;

  constructor(private ms: MovieService) {}

  ngOnInit() {
    this.MoviesList$ = this.ms.getAll();
  }
}
