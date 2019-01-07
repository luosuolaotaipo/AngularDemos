import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public isStickyNav:boolean;
  private preScrollPos:number;
  private currentScrollPos:number;
  constructor() {
    this.isStickyNav = false;
   }

  ngOnInit() {
    this.preScrollPos = window.pageYOffset;
  }

  @HostListener('window:scroll', [])
  setSticky() {
    this.currentScrollPos = window.pageYOffset;
    this.isStickyNav = this.preScrollPos > this.currentScrollPos;
    this.preScrollPos = window.pageYOffset;
  }

}
