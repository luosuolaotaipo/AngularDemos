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
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ButtonComponent implements OnInit {

  isActive: string;
  constructor() {
    this.isActive = 'inactive';
  }

  ngOnInit() {
  }

  onClick() {
    this.isActive = (this.isActive === 'active') ? 'inactive' : 'active';
  }

}
