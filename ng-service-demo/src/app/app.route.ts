import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: '', loadChildren: './c/c.module#CModule' },
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule {}
