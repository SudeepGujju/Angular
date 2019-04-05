import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[type="password"]'
})
export class KeyboardEventsDirective {

  constructor(private el: ElementRef) {
    console.log(el);
  }
  /* Not Required for type password
  @HostListener('copy', ['$event']) onCopy($event) {
    console.log($event);
  } */

  @HostListener('paste', ['$event']) onPaste($event: ClipboardEvent) {
    //console.log($event);
    $event.preventDefault();
  }
}
