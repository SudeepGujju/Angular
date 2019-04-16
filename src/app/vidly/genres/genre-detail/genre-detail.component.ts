import { Component, OnInit } from "@angular/core";
import { GenreService } from "../genre.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: "app-genre-detail",
  templateUrl: "./genre-detail.component.html",
  styleUrls: ["./genre-detail.component.css"]
})
export class GenreDetailComponent implements OnInit {
  public Genre$;

  constructor(
    private gs: GenreService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Genre$ = this.activatedRoute.paramMap.pipe(
      switchMap(paramsAsMap => {
        return this.gs.get(paramsAsMap.get("id"));
      })
    );
  }

  updateGenre(genre) {
    console.log(genre.value);
    //this.gs.update(genre.value).subscribe(() => {});
    //this.gs.create({ name: genre.value.name }).subscribe(() => {});
  }
}
