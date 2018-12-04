import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective {

  constructor(public el : ElementRef) { }

  @Input('format') format;

  @HostListener('blur')  onblur(){

    let value: string = this.el.nativeElement.value;

    if(this.format == "uppercase")
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();

  }

}
