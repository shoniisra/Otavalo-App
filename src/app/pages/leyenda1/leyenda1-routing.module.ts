import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyenda1Page } from './leyenda1.page';

const routes: Routes = [
  {
    path: '',
    component: Leyenda1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyenda1PageRoutingModule {}
