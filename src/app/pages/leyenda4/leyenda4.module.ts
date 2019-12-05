import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyenda4PageRoutingModule } from './leyenda4-routing.module';

import { Leyenda4Page } from './leyenda4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyenda4PageRoutingModule
  ],
  declarations: [Leyenda4Page]
})
export class Leyenda4PageModule {}
