import { Component, OnInit } from "@angular/core";
import { GenreService } from "../genre.service";

@Component({
  selector: "app-genre-list",
  templateUrl: "./genre-list.component.html",
  styleUrls: ["./genre-list.component.css"]
})
export class GenreListComponent implements OnInit {
  private GenresList$;

  constructor(private gs: GenreService) {}

  ngOnInit() {
    this.GenresList$ = this.gs.getAll();
  }
}
