import { Directive, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel]',
})

// Here we use [ngModel] that means we are looking for an element which is having ngModel directive on it.
export class HighlightDirective {
  constructor(public control: NgModel) {
    console.log(control);
  }

  @HostBinding('class')
  get addClass() {
    console.log(this.control);
    return this.control.valid ? 'addColor-green addBg-light alignText' : null;
  }
}
