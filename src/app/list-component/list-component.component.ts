import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() List;

  constructor() { }

  ngOnInit() {
  }

  SelectedItem;

  showDetails(vIdx)
  {
    this.SelectedItem  = this.List[vIdx];
  }

  Updated(param)
  {
    console.log(`Price updated  -> ${param}`);
  }

}
