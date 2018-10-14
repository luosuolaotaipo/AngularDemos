import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      state('active', style({
        transform: 'scale(1.2)'
      })),
      // 写法1
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out'))
      
      //写法2
      // transition('inactive <=> active', animate('100ms ease-in'))
      
      //写法3
      transition('inactive => active,active => inactive', animate('100ms ease-in')),
    ]),
    trigger('fadeInOut',[
      state('void',style({opacity:'0'})),
      state('*',style({opacity:'1'})),
      transition('void<=>*',animate('500ms'))
    ]),
    // 为什么会闪
    // trigger('fadeInOut',[
    //   state('in',style({opacity:1})),
    //   transition('void<=>*',animate(500,style({opacity:0})))
    // ])
  ]
})
export class ButtonComponent implements OnInit {

  displayFlag: boolean;
  isActive: string;
  constructor() {
    this.isActive = 'inactive';
    this.displayFlag = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.isActive = (this.isActive === 'active') ? 'inactive' : 'active';
    this.displayFlag = !this.displayFlag;
  }

}
