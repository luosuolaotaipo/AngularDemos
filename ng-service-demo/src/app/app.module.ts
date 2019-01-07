import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootService } from './root.service';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { routes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AModule,
    BModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
