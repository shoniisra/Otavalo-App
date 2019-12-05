import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyenda1PageRoutingModule } from './leyenda1-routing.module';

import { Leyenda1Page } from './leyenda1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyenda1PageRoutingModule
  ],
  declarations: [Leyenda1Page]
})
export class Leyenda1PageModule {}
