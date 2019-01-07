import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c.component';
import { RouterModule } from '@angular/router';
import { cRoutes } from './c.route';
import { SubRootService } from '../sub-root.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cRoutes)
  ],
  declarations: [CComponent],
  exports: [CComponent],
  providers: [SubRootService]
})
export class CModule { }
