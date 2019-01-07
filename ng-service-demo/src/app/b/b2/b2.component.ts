import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootService } from 'src/app/root.service';
import { SubRootService } from 'src/app/sub-root.service';
import { CompLevelService } from 'src/app/comp-level.service';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css'],
  providers: [CompLevelService]
})
export class B2Component implements OnInit, OnDestroy {

  rootCounter: number;
  subRootCounter: number;
  compCounter: number;
  constructor(
    private root: RootService,
    private subRoot: SubRootService,
    private comp: CompLevelService
  ) { }

  ngOnInit() {
    this.rootCounter = this.root.rootCounter;
    this.subRootCounter = this.subRoot.subRootCounter;

  }

  ngOnDestroy(): void {
    console.log('b2 destoryed');
  }

  addRoot(): void {
    this.root.rootCounter++;
  }

  addSubRoot(): void {
    this.subRoot.subRootCounter++;
  }
  addComp(): void{
    this.comp.compCounter++;
  }

}
