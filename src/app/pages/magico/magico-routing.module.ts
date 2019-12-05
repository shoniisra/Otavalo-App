import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicoPage } from './magico.page';

const routes: Routes = [
  {
    path: '',
    component: MagicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicoPageRoutingModule {}
