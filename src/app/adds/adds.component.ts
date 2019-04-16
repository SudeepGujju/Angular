import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from "@angular/core";
import { AddsService } from "./adds.service";
import { AdItem } from "./add.item";
import { AdDirective } from "./ad.directive";

@Component({
  selector: "app-adds",
  templateUrl: "./adds.component.html",
  styleUrls: ["./adds.component.css"]
})
export class AddsComponent implements OnInit, OnDestroy {
  ads: AdItem[];
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    private Ads: AddsService
  ) { }

  ngOnInit() {
    this.ads = this.Ads.getAdds();
    this.loadComponent();
    this.changeComponent();
  }

  componentNumber = 0;
  timeInterval;

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.ads[this.componentNumber].Component
    );

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.ads[this.componentNumber].data;

    this.componentNumber++;
    if (this.componentNumber === 4) {
      this.componentNumber = 0;
    }
  }

  changeComponent() {
    this.timeInterval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }
}
