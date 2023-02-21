import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTDirective]',
})
export class TDirectiveDirective {
  highlight:any;
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color = 'red';
  }
  @HostListener('click') onClick() {
    // this.highlight('yellow');
    this.el.nativeElement.style.backgroundColor = 'yellow';

  }
}
