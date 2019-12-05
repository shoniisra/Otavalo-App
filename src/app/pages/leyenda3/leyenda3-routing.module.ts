import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyenda3Page } from './leyenda3.page';

const routes: Routes = [
  {
    path: '',
    component: Leyenda3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyenda3PageRoutingModule {}
