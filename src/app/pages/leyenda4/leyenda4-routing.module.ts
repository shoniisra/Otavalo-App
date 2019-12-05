import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyenda4Page } from './leyenda4.page';

const routes: Routes = [
  {
    path: '',
    component: Leyenda4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyenda4PageRoutingModule {}
