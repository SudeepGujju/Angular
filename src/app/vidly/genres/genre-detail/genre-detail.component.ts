import { Component, OnInit } from "@angular/core";
import { GenreService } from "../genre.service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { OperationMode } from '../../../common/constants/operationMode';
import { NgxSpinnerService } from "ngx-spinner";
import { combineLatest, empty } from "rxjs";

@Component({
  selector: "app-genre-detail",
  templateUrl: "./genre-detail.component.html",
  styleUrls: ["./genre-detail.component.css"]
})
export class GenreDetailComponent implements OnInit {

  public readonly operationMode = OperationMode;
  public pageMode = this.operationMode.create;
  public genre: Genre = {
    id: "",
    name: ""
  };

  constructor(private gs: GenreService, private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService) {
    this.localErrorHandler.bind(this);
  }

  ngOnInit() {

    const Param$ = combineLatest(this.route.params, this.route.queryParams).pipe(
      map(([params, queryParams]) => {
        return { ...params, ...queryParams }
      })
    );

    Param$
      .pipe(
        switchMap(paramMap => {

          if (paramMap['PageMode'])
            this.pageMode = paramMap['PageMode'];

          if (paramMap['_id'])
            return this.gs.get(paramMap['_id']);
          else
            return empty();

        })
      )
      .subscribe(
        (genre: any) => {
          this.genre = {
            id: genre._id,
            name: genre.name
          };
        },
        this.localErrorHandler
      );
  }

  createGenre(genre) {
    this.gs.create(genre)
      .subscribe(
        (data) => {
          alert("Record inserted successfully");
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        this.localErrorHandler
      );
  }

  updateGenre(genre) {
    this.gs.update(genre).subscribe(
      (data) => {
        alert("Record updated successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      this.localErrorHandler
    );
  }

  localErrorHandler(err) {
    if (!err.errorMessage)
      throw err;
    else
      alert(err.errorMessage);
  }

}
