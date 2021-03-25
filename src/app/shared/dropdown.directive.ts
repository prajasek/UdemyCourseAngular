import { Directive, ElementRef, Host, HostBinding,HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @HostBinding('class.open') isOpen = false;
  @HostBinding('style.fontSize') fontSize = '20px';

  constructor(private elementRef: ElementRef){}

  @HostListener('click') toggleOpen(){
      this.isOpen = !this.isOpen;
      if (this.isOpen) {this.fontSize = '10px'}
      else {this.fontSize = '20px'}
      console.log(this.elementRef);
    }
}
