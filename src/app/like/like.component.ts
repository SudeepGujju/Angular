import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isActive;
  @Input('index') idx;

  @Output("updateLike") updateLike = new EventEmitter();

  //isActive = false;

  constructor() { }

  ngOnInit() {
  }

  LikeChange(){

    //console.log(this.isActive);
    this.isActive = !this.isActive;

    this.updateLike.emit({"status":this.isActive, "index":this.idx});
  }

}
