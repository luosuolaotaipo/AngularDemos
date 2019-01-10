import { Component } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private root:RootService
  ){

  }
  title = 'app';
  hideModuleA = false;
  hideModuleB = false;

  AToggle():void{
    this.hideModuleA = !this.hideModuleA;
  }

  BToggle():void{
    this.hideModuleB = !this.hideModuleB;
  }
}
