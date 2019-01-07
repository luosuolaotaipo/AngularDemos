import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { SubRootService } from '../sub-root.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  rootCounter: number;
  subRootCounter: number;
  constructor(
    private root: RootService,
    private subRoot: SubRootService,
  ) { }

  ngOnInit() {
    this.rootCounter = this.root.rootCounter;
    this.subRootCounter = this.subRoot.subRootCounter;
    console.log('root counter in c:' + this.rootCounter);
    console.log('sub root in c:' + this.subRootCounter);
  }

  addRoot(): void {
    this.root.rootCounter++;
  }

  addSubRoot(): void {
    this.subRoot.subRootCounter++;
  }


}
