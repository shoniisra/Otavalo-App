import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErgologicoPage } from './ergologico.page';

const routes: Routes = [
  {
    path: '',
    component: ErgologicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErgologicoPageRoutingModule {}
