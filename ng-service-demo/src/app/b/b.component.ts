import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  private hideB1:boolean;
  private hideB2:boolean;
  constructor() { }

  ngOnInit() {
    this.hideB1 = false;
    this.hideB2 = false;
  }

  B1Toggle(){
    this.hideB1 = !this.hideB1;
  }

  B2Toggle(){
    this.hideB2 = !this.hideB2;
  }

}
