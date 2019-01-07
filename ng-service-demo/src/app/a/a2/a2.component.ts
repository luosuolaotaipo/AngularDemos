import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootService } from 'src/app/root.service';
import { SubRootService } from 'src/app/sub-root.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit,OnDestroy {

  rootCounter: number;
  subRootCounter: number;
  constructor(
    private root: RootService,
    private subRoot: SubRootService
  ) { }

  ngOnInit() {
    this.rootCounter = this.root.rootCounter;
    this.subRootCounter = this.subRoot.subRootCounter;
  }

  ngOnDestroy(): void {
    console.log('a2 destoryed');
  }

  addRoot(): void {
    this.rootCounter++;
  }

  addSubRoot(): void {
    this.subRootCounter++;
  }

}
