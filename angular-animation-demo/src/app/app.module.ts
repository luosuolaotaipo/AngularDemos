import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { LoadImgDirective } from './load-img.directive';
import { ImgDemoComponent } from './img-demo/img-demo.component';
import { QuerylistLiComponent, ChildDirective } from './querylist-li/querylist-li.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoadImgDirective,
    ImgDemoComponent,
    QuerylistLiComponent,
    ChildDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
