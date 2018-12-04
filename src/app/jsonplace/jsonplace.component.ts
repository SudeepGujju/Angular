import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsonplace',
  templateUrl: './jsonplace.component.html',
  styleUrls: ['./jsonplace.component.css']
})
export class JSONPLACEComponent implements OnInit {

  Posts:POST[];
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe((response: POST[]) =>{
        this.Posts = response;
        console.log(response);
      });
  }

  createPost(postTitle: HTMLInputElement){
    
    let post = {title:postTitle.value};

    this.http.post(this.url,JSON.stringify(post)).subscribe((response:Object) => {  
      console.log(response);
      this.Posts.unshift({"title":postTitle.value, "id":response.id});
      postTitle.value = "";
    });
  }

  updatePost(post){
    this.http.patch(this.url+"/"+post.id, JSON.stringify({"title":"UPDATED"})).subscribe((response: Object) => {
      console.log(response);
      var index = 
      this.Posts.findIndex((postObj, idx) => {
        if(postObj.id == post.id)
          return true;
      });
      this.Posts[index] = post;
    });
  }

  deletePost(post){
    this.http.delete(this.url+"/"+post.id).subscribe((response: Object)=>{
      var index = this.Posts.indexOf(post);
      this.Posts.splice(index, 1);
    });
  }
}

interface POST {

  id:number,
  title:string,

}