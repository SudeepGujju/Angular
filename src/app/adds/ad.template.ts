import { Component, Input } from '@angular/core';

@Component({
  selector: '<app-techadd>',
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-img-top">
        <img [src]="data.url" style="width:286px; height:180px;" />
      </div>
      <div class="card-body">
        <div class="card-title">{{ data.title }}</div>
        <div class="card-text">{{ data.body }}</div>
      </div>
    </div>
  `
})
export class TechAdComponent {
  @Input() data: any;
}

@Component({
  selector: "<app-jobadd>",
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <div class="card-title">{{ data | json }}</div>
      </div>
    </div>
  `
})
export class JobAdComponent {
  @Input() data: any;
}

export const AddsComponents = [TechAdComponent, JobAdComponent];
