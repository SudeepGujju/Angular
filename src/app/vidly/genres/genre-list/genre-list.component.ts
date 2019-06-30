import { Component, OnInit } from "@angular/core";
import { GenreService } from "../genre.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OperationMode } from "src/app/common/constants/operationMode";
import { bounceOutLeftTrigger, bounceInRightTrigger } from "src/app/common/animations/bounce.animation";
import { trigger, transition, query, stagger, animateChild, group, style, animate } from "@angular/animations";

@Component({
  selector: "app-genre-list",
  templateUrl: "./genre-list.component.html",
  styleUrls: ["./genre-list.component.css"],
  animations: [
    trigger('stagger', [
      transition(':enter', [
        query('@bounceInRight', [
          stagger('200ms', animateChild())
        ])
      ])
    ]),
    bounceInRightTrigger,
    bounceOutLeftTrigger
  ]
})
export class GenreListComponent implements OnInit {
  public GenresList$;

  constructor(private gs: GenreService, private router: Router, private route: ActivatedRoute) {
    this.localErrorHandler.bind(this);
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.GenresList$ = this.gs.getAll();
  }

  create() {
    this.router.navigate(['./detail'], { queryParams: { 'PageMode': OperationMode.create }, relativeTo: this.route });
  }

  edit(id) {
    this.router.navigate(['./detail'], { queryParams: { '_id': id, 'PageMode': OperationMode.edit }, relativeTo: this.route });
  }

  delete(id) {
    this.gs.delete(id).subscribe(() => {
      this.getAll();
    },
      this.localErrorHandler
    );
  }

  trackGenre(index, item) {
    console.log(item);
    return item._id;
  }

  localErrorHandler = (err) => {
    if (!err.errorMessage)
      throw err;
    else
      alert(err.errorMessage);
  }

}
