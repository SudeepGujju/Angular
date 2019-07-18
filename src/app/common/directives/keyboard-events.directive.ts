import { Directive, HostListener, ElementRef, Optional } from '@angular/core';
import { FormControl, FormControlName, FormControlDirective } from '@angular/forms';

@Directive({
  selector: 'input[type="password"]'
})
export class KeyboardEventsDirective {

  constructor(private el: ElementRef) {
    //console.log(el);
  }

  @HostListener('copy', ['$event']) onCopy($event) {
    $event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste($event: ClipboardEvent) {
    $event.preventDefault();
  }

  @HostListener('drag', ['$event'])
  onDrag($event: ClipboardEvent) {
    $event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop($event: ClipboardEvent) {
    $event.preventDefault();
  }
}

@Directive({
  selector: '[AllowOnlyNumber]'
})
export class InputNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event'])
  onKeyUp($event: KeyboardEvent) { /*$event.preventDefault(); */ }

  @HostListener('paste', ['$event'])
  onPaste($event: ClipboardEvent) {
    $event.preventDefault();
    const pastedInput: string = $event.clipboardData.getData('text/plain').replace(/\D/g, '');
    this.el.nativeElement.value = pastedInput;
  }

  @HostListener('drop', ['$event'])
  onDrop($event: DragEvent) {
    $event.preventDefault();
    const draggedInput: string = $event.dataTransfer.getData('text/plain').replace(/\D/g, ''); console.log(draggedInput);
    this.el.nativeElement.value = draggedInput;
  }

  filter($event) {
    const InitValue: string = this.el.nativeElement.value;

    let FinalValue: string = InitValue.replace(/\D/g, '');

    if (InitValue === FinalValue) {
      $event.preventDefault();
      $event.stopPropagation();
    } else {
      this.el.nativeElement.value = FinalValue;
    }
  }
}
