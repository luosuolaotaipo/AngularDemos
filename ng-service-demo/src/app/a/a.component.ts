import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  private hideA1:boolean;
  private hideA2:boolean;
  constructor() { }

  ngOnInit() {
    this.hideA1 = false;
    this.hideA2 = false;
  }

  A1Toggle(){
    this.hideA1 = !this.hideA1; 
  }

  A2Toggle(){
    this.hideA2 = !this.hideA2;
  }

  

}
