import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { delay, tap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { bounceInRightTrigger, bounceOutLeftTrigger } from "../../../common/animations/bounce.animation";
import { Observable } from "rxjs";
import { OperationMode } from "../../../common/constants/operationMode";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  animations: [bounceInRightTrigger, bounceOutLeftTrigger]
  // animations: [
  //   trigger('exit', [
  //     transition(":leave", [
  //       animate(500, style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class MovieListComponent implements OnInit {
  private MoviesList$: Observable<any>;

  public MoviesList = null;
  constructor(
    private ms: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  trackMovie(index, item) {
    return item._id;
  }

  getAll() {
    //this.spinner.show();
    this.MoviesList$ = this.ms.getAll();//.pipe(delay(1000), tap(() => { this.spinner.hide(); }, () => { this.spinner.hide(); }));
    this.MoviesList$.subscribe(
      data => { this.MoviesList = data; },
      this.localErrorHandler
    )
  }

  edit(id) {
    this.router.navigate(["./detail"], { queryParams: { '_id': id, 'PageMode': OperationMode.edit }, relativeTo: this.route });
  }

  create() {
    this.router.navigate(["./detail"], { queryParams: { 'PageMode': OperationMode.create }, relativeTo: this.route });
  }

  // deleteByIndex(movie) {
  //   console.log(movie);
  //   const i = this.MoviesList.indexOf(movie);
  //   //console.log(i);
  //   this.MoviesList.splice(i, 1);
  // }

  delete(id) {
    this.ms.delete(id).subscribe(
      data => { this.getAll(); },
      this.localErrorHandler
    );
  }

  localErrorHandler = (err) => {

    if (!err.errorMessage)
      throw err;
    else
      alert(err.errorMessage);

  }

  // ngOnDestroy() {
  //   this.MoviesList$;
  // }
}
