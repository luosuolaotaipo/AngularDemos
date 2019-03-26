import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Directive } from '@angular/core';


@Directive({selector: 'appDirective'})
export class ChildDirective {
}

@Component({
  selector: 'app-querylist-li',
  templateUrl: './querylist-li.component.html',
  styleUrls: ['./querylist-li.component.css']
})
export class QuerylistLiComponent implements OnInit, AfterContentInit {

  @ContentChildren(ChildDirective) li: QueryList<ChildDirective>;
  counter = 1;
  arr = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

  addCounter() {
    this.counter += 1;
    // this.li.notifyOnChanges();
  }

  ngAfterContentInit(): void {
    // this.li.forEach(item => { console.log(item) });
    this.li.changes.subscribe(change => {
      document.getElementById(this.counter.toString()).focus();
    });
  }

}
