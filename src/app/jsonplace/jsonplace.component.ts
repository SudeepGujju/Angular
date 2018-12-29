import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostService } from "./post.service";
import { AppError } from "../common/Error/app-error";
import { NotFoundError } from "../common/Error/not-found-error";
import { BadRequestError } from "../common/Error/bad-input-error";

@Component({
  selector: "app-jsonplace",
  templateUrl: "./jsonplace.component.html",
  styleUrls: ["./jsonplace.component.css"]
})
export class JSONPLACEComponent implements OnInit {
  Posts: POST[];
  url = "https://jsonplaceholder.typicode.com/posts";

  //constructor(private http: HttpClient) { }
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response: POST[]) => {
        this.Posts = response;
      },
      (error: Response) => {
        console.log(error.status);
        if (error instanceof BadRequestError) alert("Invalid data");
        else if (error instanceof NotFoundError) alert("Post does not exist");
        else alert("An unexpected error occured");
      }
    );
  }

  createPost(postTitle: HTMLInputElement) {
    let post = { title: postTitle.value, id: null };
    this.Posts.unshift(post);

    postTitle.value = "";
    this.postService.createPost(post).subscribe(
      (response: POST) => {
        post.id = response.id;
      },
      (error: Response) => {
        this.Posts.shift();
        if (error instanceof BadRequestError) alert("Invalid data");
        else alert("An unexpected error occured");
      }
    );
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
      (response: Object) => {
        let index = this.Posts.findIndex((postObj, idx) => {
          if (postObj.id == post.id) return true;
        });
        this.Posts[index] = post;
      },
      (error: Response) => {
        if (error instanceof NotFoundError) alert("Post does not exist");
        else alert("An unexpected error occured");
      }
    );
  }

  deletePost(post) {
    var index = this.Posts.indexOf(post);
    this.Posts.splice(index, 1);

    this.postService.deletePost(post.id).subscribe(
      (response: Object) => {},
      (error: AppError) => {
        this.Posts.splice(index, 0, post);
        if (error instanceof NotFoundError) alert("Post does not exist");
        else alert("An unexpected error occured");
      }
    );
  }
}

interface POST {
  id: number;
  title: string;
}
