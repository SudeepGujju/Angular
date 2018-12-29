import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/Error/app-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { BadRequestError } from "../common/Error/bad-input-error";

@Injectable()
export class PostService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      tap(data => console.log("Req Prcsd >>", JSON.stringify(data))),
      catchError(err => {
        if (err.status == 400) return throwError(new BadRequestError(err));

        return throwError(new AppError(err));
      })
    );
  }

  updatePost(post) {
    return this.http
      .patch(this.url + "/" + post.id, JSON.stringify({ title: "UPDATED" }))
      .pipe(
        tap(
          data => console.log("Req Prcsd >>", JSON.stringify(data)),
          data => console.log("Req Prcsd failed>>", JSON.stringify(data))
        ),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id).pipe(
      tap(data => console.log("Req Prcsd >>", JSON.stringify(data))),
      catchError(err => {
        if (err.status == 404) return throwError(new NotFoundError(err));

        return throwError(new AppError(err));
      })
    );
  }
}
