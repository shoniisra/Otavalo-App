import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyenda2Page } from './leyenda2.page';

const routes: Routes = [
  {
    path: '',
    component: Leyenda2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyenda2PageRoutingModule {}
