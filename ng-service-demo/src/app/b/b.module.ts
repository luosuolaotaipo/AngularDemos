import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { SubRootService } from '../sub-root.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BComponent, B1Component, B2Component],
  exports:[BComponent],
  providers:[SubRootService]
})
export class BModule { }
