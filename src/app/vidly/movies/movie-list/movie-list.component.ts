import { trigger, transition, style, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { delay } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { bounceInRightTrigger, bounceOutLeftTrigger } from "src/app/common/animations/bounce.animation";
import { Observable } from "rxjs";

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

  private MoviesList = [];
  constructor(
    private ms: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAll();
  }

  trackMovie(index, item) {
    return item._id;
  }

  getAll() {
    this.MoviesList$ = this.ms.getAll().pipe(delay(1000));
    this.MoviesList$.subscribe(data => {
      this.MoviesList = data;
    })
  }

  get(id) {
    this.router.navigate(["./" + id], { relativeTo: this.route });
  }

  // deleteByIndex(movie) {
  //   console.log(movie);
  //   const i = this.MoviesList.indexOf(movie);
  //   //console.log(i);
  //   this.MoviesList.splice(i, 1);
  // }

  delete(id) {
    this.ms.delete(id).subscribe(
      data => {
        this.getAll();
      },
      err => { }
    );
  }

  // ngOnDestroy() {
  //   this.MoviesList$;
  // }
}
