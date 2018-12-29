import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[add-host]"
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
