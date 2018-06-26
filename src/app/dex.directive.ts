import { Directive, OnInit } from '@angular/core';
import { ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDex]'
})
export class DexDirective implements OnInit {

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  ngOnInit(){
    
  }

  @HostListener('focus') onFocus() {
    this.ele.nativeElement.style.backgroundColor = "#def";
    this.renderer.setStyle(this.ele.nativeElement, 'border', '0.5px solid #a9e');
    this.renderer.setStyle(this.ele.nativeElement, 'box-shadow', '1px 1px 4px #a9e');
    
  }
   
  @HostListener('blur') onBlur() {
    this.ele.nativeElement.style.backgroundColor = "white";
    this.renderer.removeStyle(this.ele.nativeElement, 'border');
    this.renderer.removeStyle(this.ele.nativeElement, 'box-shadow');
  }

  

}
