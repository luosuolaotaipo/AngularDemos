import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/root.service';
import { SubRootService } from 'src/app/sub-root.service';
import { CompLevelService } from 'src/app/comp-level.service';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css'],
  providers: [CompLevelService]
})
export class B1Component implements OnInit {

  rootCounter: number;
  subRootCounter: number;
  constructor(
    private root: RootService,
    private subRoot: SubRootService,
    private comp: CompLevelService
  ) { }

  ngOnInit() {
    this.rootCounter = this.root.rootCounter;
    this.subRootCounter = this.subRoot.subRootCounter;

  }

  addRoot(): void {
    this.root.rootCounter++;
  }

  addSubRoot(): void {
    this.subRoot.subRootCounter++;
  }

  addComp(): void {
    this.comp.compCounter++;
  }
}
