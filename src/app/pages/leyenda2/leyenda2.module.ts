import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyenda2PageRoutingModule } from './leyenda2-routing.module';

import { Leyenda2Page } from './leyenda2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyenda2PageRoutingModule
  ],
  declarations: [Leyenda2Page]
})
export class Leyenda2PageModule {}
