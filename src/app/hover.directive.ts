
import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef) { }
   @HostListener ('mouseenter') onEnter(){
     this.el.nativeElement.style.backgroundcolor="red";
     console.log();
   }
   @HostListener ('mouseleave') onLeave(){
     this.el.nativeElement.style.backgroundcolor="green";
   }
}
