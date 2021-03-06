import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../genres/genre.service';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { empty, combineLatest } from 'rxjs';
import { OperationMode } from '../../../common/constants/operationMode';
import { NgxSpinnerService } from 'ngx-spinner';
//import { OperationMode } from '../../../common/sevices/operation-mode.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //private OperationMode = null;
  private readonly CoverImage = "images/NoCover.jpg";
  public readonly operationMode = OperationMode;
  public PageMode = OperationMode.create;
  public GenreList: any[];
  public Movie: Movie = {
    id: "",
    title: "",
    genreId: "",
    numberInStock: "0",
    dailyRentalRate: "",
    coverPicID: null,
    coverPic: "images/NoCover.jpg"
  };

  private moviePic: File;
  constructor(private gs: GenreService, private ms: MovieService, private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // this.OperationMode = this.mode.CreateMode;
    // x.subscribe((a) => { console.log(a) });
    // const y = combineLatest(this.route.paramMap, this.route.queryParamMap).pipe(
    //   map(([paramMap, queryParams]) => ({ ...paramMap, ...queryParams }))
    // );
    // y.subscribe((a) => { console.log(a) });

    this.gs.getAll().subscribe(
      (data: any[]) => { this.GenreList = data },
      this.localErrorHandler
    );

    const Params$ = combineLatest(this.route.params, this.route.queryParams).pipe(
      map(([params, queryParams]) => { return { ...params, ...queryParams } })
    );

    Params$.
      pipe(
        switchMap(paramMap => {

          if (paramMap['PageMode']) this.PageMode = paramMap['PageMode'];

          if (paramMap["_id"])
            return this.ms.get(paramMap["_id"]);
          else
            return empty();

        })
      ).
      subscribe(
        (movie: any) => {
          //  this.OperationMode = this.mode.EditMode;
          this.Movie = {
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
            id: movie._id,
            coverPicID: movie.coverPicID,
            coverPic: (movie.coverPic ? movie.coverPic : this.CoverImage)
          }
        },
        this.localErrorHandler
      );
  }

  createMovie(movie) {
    const movieFormData = new FormData();

    movieFormData.append('id', movie.id);
    movieFormData.append('title', movie.title);
    movieFormData.append('genreId', movie.genreId);
    movieFormData.append('numberInStock', movie.numberInStock);
    movieFormData.append('dailyRentalRate', movie.dailyRentalRate);
    movieFormData.append('coverPicID', movie.coverPicID);
    movieFormData.append('coverPic', this.moviePic);

    //this.spinner.show();
    this.ms.create(movieFormData).subscribe(
      (data) => {
        alert("Record inserted successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      this.localErrorHandler,
      () => {
        this.spinner.hide();
      }
    );
  }

  editMovie(movie) {

    const movieFormData = new FormData();
    movieFormData.append('id', movie.id);
    movieFormData.append('title', movie.title);
    movieFormData.append('genreId', movie.genreId);
    movieFormData.append('numberInStock', movie.numberInStock);
    movieFormData.append('dailyRentalRate', movie.dailyRentalRate);
    movieFormData.append('coverPicID', movie.coverPicID);
    movieFormData.append('coverPic', this.moviePic);

    //this.spinner.show();
    this.ms.update(movieFormData, movie.id)
      .subscribe(
        (data) => {
          alert("Record updated successfully");
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        this.localErrorHandler
      );
  }

  onFileSelect(event) {

    if (event.target.files && event.target.files.length) {
      this.moviePic = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = function (event: any) {
        document.getElementById("coverPic").setAttribute("src", event.target.result);
      };
    }
    else
      this.moviePic = null;
  }

  localErrorHandler = (err) => {

    if (!err.errorMessage)
      throw err;
    else
      alert(err.errorMessage);

  }

  ngDoCheck() {
    //console.log(this.titleVar);
  }
}