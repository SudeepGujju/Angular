import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { sortablejsConstant } from 'src/app/common/constants/sortablejsConstants';

@Component({
  selector: 'app-vidly-home',
  templateUrl: './vidly-home.component.html',
  styleUrls: ['./vidly-home.component.css']
})
export class VidlyHomeComponent implements OnInit {

  //private sortFilterClass = sortablejsConstant.filterClass;
  private sortChosenClass = sortablejsConstant.chosenClass;
  private sortHandleClass = sortablejsConstant.handleClass;
  private sortableOptions: SortablejsOptions = {
    group: "vidly",
    sort: true,
    chosenClass: this.sortChosenClass,// -- work
    handle: this.sortHandleClass
    //draggable: ".item" -- works
    // filter: this.sortFilterClass
  };

  constructor() { }

  ngOnInit() {
    // this.sortableOptions = {
    //   group: "name",
    //   sort: true,
    //   filter: this.sortFilterClass
    // }
  }

}
