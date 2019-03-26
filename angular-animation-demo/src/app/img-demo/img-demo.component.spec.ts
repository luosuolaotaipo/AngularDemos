import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDemoComponent } from './img-demo.component';

describe('ImgDemoComponent', () => {
  let component: ImgDemoComponent;
  let fixture: ComponentFixture<ImgDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
