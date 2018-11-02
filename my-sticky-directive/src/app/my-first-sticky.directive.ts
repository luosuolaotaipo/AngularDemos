import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyFirstSticky]'
})
export class MyFirstStickyDirective implements OnInit {
  private isSticky = false;
  private isScrollUp = false;
  private prevScrollpos: number;
  private el: HTMLElement;
  public STICKY_CLASS = {
    stickyTop: 'stickyTop'
  };


  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.el = this.elementRef.nativeElement;
  }
  @HostListener('window:scroll')
  onScroll() {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.isScrollUp = true;
    } else {
      this.isScrollUp = false;
    }
    this.prevScrollpos = currentScrollPos;
    this.doStickyCheck();

  }

  ngOnInit(): void {
    this.prevScrollpos = window.pageYOffset;
  }

  doStickyCheck() {
    if (this.isScrollUp) {
      this.renderer.addClass(this.el, this.STICKY_CLASS.stickyTop);
    } else {
      this.renderer.removeClass(this.el, this.STICKY_CLASS.stickyTop);
    }
  }

}
