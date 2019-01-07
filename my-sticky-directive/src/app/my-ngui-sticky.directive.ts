import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appMyNguiSticky]'
})
export class MyNguiStickyDirective implements AfterViewInit, OnDestroy {
  @Input() public stickyAfter: string;  // css selector to be sticky after
  protected el: HTMLElement;
  protected parentEl: HTMLElement;
  protected fillerEl: HTMLElement;
  protected stickyAfterElement: HTMLElement;
  protected stickyTopDistance: number;
  private preScrollPos: number;
  private curScrollPos: number;

  // protected diff: any;
  protected original: any;

  protected STICKY_CLASSES = {
    STUCK: 'ngui-sticky-stuck',
    UNSTUCK: 'ngui-sticky-unstuck',
    TOP: 'ngui-sticky-top',
    BOTTOM: 'ngui-sticky-bottom',
    FILLER: 'ngui-sticky-filler',
    CONTAINER: 'ngui-sticky-container'
  };

  constructor(el: ElementRef, protected renderer: Renderer2) {
    this.el = this.el = el.nativeElement;
    this.parentEl = this.el.parentElement;
  }

  public ngAfterViewInit(): void {
    // this.el.style.boxSizing = 'border-box';
    this.renderer.addClass(this.el, this.STICKY_CLASSES.UNSTUCK);
    this.renderer.addClass(this.el, this.STICKY_CLASSES.TOP);
    this.renderer.addClass(this.parentEl, this.STICKY_CLASSES.CONTAINER);
    this.preScrollPos = window.pageYOffset;

    if (this.stickyAfter) {
      this.stickyAfterElement = document.querySelector(this.stickyAfter) as HTMLElement;
    }

    // set the parent relatively positioned
    const allowedPositions = ['absolute', 'fixed', 'relative'];
    const parentElPosition = this.computedStyle(this.parentEl, 'position');
    if (allowedPositions.indexOf(parentElPosition) === -1) { //inherit, initial, unset
      this.parentEl.style.position = 'relative';
    }

    // this.diff = {
    //   top: this.el.offsetTop - this.parentEl.offsetTop,
    //   left: this.el.offsetLeft - this.parentEl.offsetLeft
    // };

    const elRect = this.el.getBoundingClientRect();
    this.original = {
      boundingClientRect: elRect,
      position: this.computedStyle(this.el, 'position'),
      float: this.computedStyle(this.el, 'float'),
      top: this.computedStyle(this.el, 'top'),
      bottom: this.computedStyle(this.el, 'bottom'),
      left: this.computedStyle(this.el, 'left'),
      width: this.computedStyle(this.el, 'width'),
      offsetTop: this.el.offsetTop,
      offsetLeft: this.el.offsetLeft,
      marginTop: parseInt(this.computedStyle(this.el, 'marginTop'), 10),
      marginBottom: parseInt(this.computedStyle(this.el, 'marginBottom'), 10),
      marginLeft: parseInt(this.computedStyle(this.el, 'marginLeft'), 10),
      marginRight: parseInt(this.computedStyle(this.el, 'marginLeft'), 10)
    };

    this.attach();
  }

  public ngOnDestroy(): void {
    this.detach();
  }

  protected attach(): void {
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('resize', this.scrollHandler);
  }

  protected detach(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.scrollHandler);
  }

  protected scrollHandler = () => {
    this.curScrollPos = window.pageYOffset;
    const parentRect: ClientRect = this.el.parentElement.getBoundingClientRect();
    // const bodyRect: ClientRect = document.body.getBoundingClientRect();
    const elRect: ClientRect = this.el.getBoundingClientRect();
    const stickyOffsetTop = this.stickyAfterElement ?
      this.stickyAfterElement.getBoundingClientRect().bottom > 0 ? this.stickyAfterElement.getBoundingClientRect().bottom : 0
      : 0;


    // if (this.original.marginTop + this.original.marginBottom +
      // this.original.boundingClientRect.height + stickyOffsetTop >= parentRect.bottom
      if (
        window.scrollY+window.innerHeight>this.parentEl.scrollHeight//window.scrollY+


      ) {
      /**
       * sticky element reached to the bottom of the container
       */
      console.log(this.original.bottom);
      Object.assign(this.el.style, {
        position: 'absolute',
        float: 'none',
        top: 'inherit',
        bottom: 0
      });
      this.setStickyTopDistance();
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.STUCK);
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.TOP);
      this.renderer.addClass(this.el, this.STICKY_CLASSES.UNSTUCK);
      this.renderer.addClass(this.el, this.STICKY_CLASSES.BOTTOM);
    } else if (parentRect.top * -1 + this.original.marginTop + stickyOffsetTop > this.original.offsetTop) {
      /**
       * sticky element is in the middle of container
       */
      if (elRect.height > window.innerHeight) {
        if (elRect.bottom > window.innerHeight) {
          if (elRect.top < 0) {
            // scrolls to the middle(can't see its top nor bottom)
            this.handleStyle(StickyStatusEnum.AbsolutePos);
          } else {
            // scrolls to the top
            if (this.preScrollPos > this.curScrollPos) {
              this.handleStyle(StickyStatusEnum.StickyUp, stickyOffsetTop);
            } else {
              this.handleStyle(StickyStatusEnum.AbsolutePos);
            }
          }
        } else {
          // scroll to the bottom
          if (this.preScrollPos > this.curScrollPos) {
            this.handleStyle(StickyStatusEnum.AbsolutePos);
          } else {
            this.handleStyle(StickyStatusEnum.StickyBottom);
          }
        }

        console.log(this.stickyTopDistance);
      } else {
        // short length
        Object.assign(this.el.style, {
          position: 'fixed', // fixed is a lot smoother than absolute
          float: 'none',
          top: stickyOffsetTop + 'px',
          bottom: 'inherit'
        });
      }
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.UNSTUCK);
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.TOP);
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.BOTTOM);
      this.renderer.addClass(this.el, this.STICKY_CLASSES.STUCK);
    } else {
      /**
       * sticky element is in the original position
       */
      if (this.fillerEl) {
        this.parentEl.removeChild(this.fillerEl); //IE11 does not work with el.remove()
        this.fillerEl = undefined;
      }
      Object.assign(this.el.style, {
        position: this.original.position,
        float: this.original.float,
        top: this.original.top,
        bottom: this.original.bottom,
        width: this.original.width,
        left: this.original.left
      });
      this.setStickyTopDistance();
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.STUCK);
      this.renderer.removeClass(this.el, this.STICKY_CLASSES.BOTTOM);
      this.renderer.addClass(this.el, this.STICKY_CLASSES.UNSTUCK);
      this.renderer.addClass(this.el, this.STICKY_CLASSES.TOP);
    }
  }
  /**
 * returns coumputed style of given element
 * @param el
 * @param styleProp
 * @returns {any}
 */
  public computedStyle(element: HTMLElement, styleProp: string) {
    let el: HTMLElement;
    el = (typeof element === 'string') ? document.querySelector(element) : element;
    let value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el['currentStyle']) {
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
      });
      value = el['currentStyle'][styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return (function (value) {
          let oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
          el['runtimeStyle'].left = el['currentStyle'].left;
          el.style.left = value || 0;
          value = el.style['pixelLeft'] + "px";
          el.style.left = oldLeft;
          el['runtimeStyle'].left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }

  setStickyTopDistance() {
    this.stickyTopDistance = window.scrollY + window.innerHeight - this.el.clientHeight;
  }

  handleStyle(stickyStatus:StickyStatusEnum, stickyOffsetTop?: number) {
    if (stickyStatus === StickyStatusEnum.Default) {
      Object.assign(this.el.style, {
        position: this.original.position,
        float: this.original.float,
        top: this.original.top,
        bottom: this.original.bottom,
        width: this.original.width,
        left: this.original.left
      });
    } else if (stickyStatus === StickyStatusEnum.StickyUp) {
      Object.assign(this.el.style, {
        position: 'fixed', //fixed is a lot smoother than absolute
        float: 'none',
        top: stickyOffsetTop + 'px',
        bottom: 'inherit'
      });
      this.setStickyTopDistance();
    } else if (stickyStatus === StickyStatusEnum.AbsolutePos) {
      Object.assign(this.el.style, {
        position: 'absolute',
        top: this.stickyTopDistance + 'px',
        bottom: 'inherit'
      });
    } else if (stickyStatus === StickyStatusEnum.StickyBottom) {
      this.setStickyTopDistance();
      Object.assign(this.el.style, {
        position: 'fixed',
        bottom: '0px',
        top: 'auto'
      });
    }
    this.preScrollPos = window.pageYOffset;
  }
}

enum StickyStatusEnum {
  'StickyUp',
  'StickyBottom',
  'AbsolutePos',
  'Default'
}

