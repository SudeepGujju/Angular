import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../genres/genre.service';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { empty } from 'rxjs';
//import { OperationMode } from '../../../common/sevices/operation-mode.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //private OperationMode = null;
  private GenreList: any[];
  private Movie: {
    id,
    title,
    genreId,
    numberInStock,
    dailyRentalRate
  }
  private moviePic: File;
  constructor(private gs: GenreService, private ms: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.OperationMode = this.mode.CreateMode;
    this.gs.getAll().subscribe((data: any[]) => { this.GenreList = data });
    this.route.paramMap.
      pipe(
        switchMap(paramMap => {

          if (paramMap.get("id"))
            return this.ms.get(paramMap.get("id"));
          else
            return empty()

        })
      ).
      subscribe((movie: any) => {
        //  this.OperationMode = this.mode.EditMode;
        this.Movie = {
          title: movie.title,
          genreId: movie.genre._id,
          numberInStock: movie.numberInStock,
          dailyRentalRate: movie.dailyRentalRate,
          id: movie._id
        }

      }, null, () => console.log("complte"));
  }

  createMovie(movie) {
    this.ms.create(movie).subscribe(
      (data) => {
        alert("Record inserted successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
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
    movieFormData.append('moviePic', this.moviePic);

    this.ms.update(movieFormData, movie.id).subscribe(
      (data) => {
        alert("Record updated successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    );
  }

  onFileSelect(event) {

    if (event.target.files && event.target.files.length)
      this.moviePic = event.target.files[0];
    else
      this.moviePic = null;
  }

  ngDoCheck() {
    //console.log(this.titleVar);
  }
}