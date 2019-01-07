import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { SubRootService } from '../sub-root.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AComponent,
    A1Component,
    A2Component
  ],
  exports: [
    AComponent
  ],
  providers: [
    SubRootService
  ]
})
export class AModule { }
