import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstStickyDirective } from './my-first-sticky.directive';
import { Test1Component } from './test1/test1.component';
import { MyNguiStickyDirective } from './my-ngui-sticky.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstStickyDirective,
    Test1Component,
    MyNguiStickyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
