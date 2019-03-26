import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-querylist-li',
  templateUrl: './querylist-li.component.html',
  styleUrls: ['./querylist-li.component.css']
})
export class QuerylistLiComponent implements OnInit, AfterContentInit {

  @ContentChildren('li') li: QueryList<any>;
  counter = 1;
  arr = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

  addCounter() {
    this.counter += 1;
    this.li.notifyOnChanges();
  }

  ngAfterContentInit(): void {
    // this.li.forEach(item => { console.log(item) });
    this.li.changes.subscribe(change => {
      console.log(change);
    });
  }

}
