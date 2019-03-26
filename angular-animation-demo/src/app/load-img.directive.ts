import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoadImg]'
})
export class LoadImgDirective implements OnInit {

  private el: HTMLElement;
  private plImg: HTMLImageElement;
  private lImg: HTMLImageElement;
  private mImg: HTMLImageElement;
  private sImg: HTMLImageElement;
  loadCounter = 0;
  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.el = this.elementRef.nativeElement;
    

  }

  ngOnInit(): void {
    const Imgs = this.el.getElementsByTagName('img');
    this.plImg = Imgs[0];
    this.lImg = Imgs[1];
    this.mImg = Imgs[2];
    this.sImg = Imgs[3];
    this.plImg.onload = () => {
    };
    this.mImg.onload = () => {
      console.log('m');
      this.loadCounter ++;
      this.detectLoadingStatus();
    };
    this.lImg.onload = () => {
      this.loadCounter ++;
      this.detectLoadingStatus();
    };
    this.sImg.onload = () => {
      this.loadCounter ++;
      this.detectLoadingStatus();
    }
  }

  detectLoadingStatus(){
    if(this.loadCounter === 3) {
      this.plImg.classList.add('display');
    }
  }

}
