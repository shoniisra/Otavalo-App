import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoeticoPage } from './poetico.page';

const routes: Routes = [
  {
    path: '',
    component: PoeticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoeticoPageRoutingModule {}
