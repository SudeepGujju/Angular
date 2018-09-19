import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  MobileList;

  constructor (){
    this.MobileList = [
                        {"Model":"Mi A1","Price":"15000","Company":"Xiaomi"},
                        {"Model":"One Plus 3T","Price":"35000","Company":"OnePlus"}
                      ];
  }

  ngOnInit() {
  }

}
