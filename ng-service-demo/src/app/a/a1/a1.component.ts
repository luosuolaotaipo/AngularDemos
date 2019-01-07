import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootService } from 'src/app/root.service';
import { SubRootService } from 'src/app/sub-root.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit,OnDestroy {

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
    console.log('a1 destoryed');
  }

  addRoot(): void {
    this.root.rootCounter++;
  }

  addSubRoot(): void {
    this.subRoot.subRootCounter++;
  }

}
