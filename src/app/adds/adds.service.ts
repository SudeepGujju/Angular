import { Injectable, Input, Component } from "@angular/core";
import { AdItem } from "./add.item";
import { TechAdComponent, JobAdComponent } from "./ad.template";

@Injectable()
export class AddsService {
  constructor() {}

  getAdds() {
    return [
      new AdItem(TechAdComponent, {
        title: "Watches",
        body: "Fastrack 1474",
        url: "/assets/fastrack-1474.png"
      }),
      new AdItem(JobAdComponent, { title: "Drones" }),
      new AdItem(TechAdComponent, {
        title: "Watches",
        body: "Fastrack Reflex",
        url: "/assets/fastrack-reflex.png"
      }),
      new AdItem(JobAdComponent, { title: "Watches" })
    ];
  }
}
