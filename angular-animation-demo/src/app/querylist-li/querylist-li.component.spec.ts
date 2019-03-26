import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerylistLiComponent } from './querylist-li.component';

describe('QuerylistLiComponent', () => {
  let component: QuerylistLiComponent;
  let fixture: ComponentFixture<QuerylistLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerylistLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerylistLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
