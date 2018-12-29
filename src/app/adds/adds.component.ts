import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { AddsService } from "./adds.service";
import { AdItem } from "./add.item";
import { AdDirective } from "./ad.directive";

@Component({
  selector: "app-adds",
  templateUrl: "./adds.component.html",
  styleUrls: ["./adds.component.css"]
})
export class AddsComponent implements OnInit {
  ads: AdItem[];
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    private Ads: AddsService
  ) {}

  ngOnInit() {
    this.ads = this.Ads.getAdds();
    this.loadComponent();
    this.changeComponent();
  }

  componentNumber = 0;

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.ads[this.componentNumber].Component
    );

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.ads[this.componentNumber].data;

    this.componentNumber++;
    if (this.componentNumber == 4) this.componentNumber = 0;
  }

  timeInterval;
  changeComponent() {
    this.timeInterval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }
}
