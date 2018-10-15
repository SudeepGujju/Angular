import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() Details;

  @Output() updt = new EventEmitter(); //Update event

  constructor() { }

  ngOnInit() {
  }

  priceUpdate(param)
  {
    this.updt.emit(param);
  }

}