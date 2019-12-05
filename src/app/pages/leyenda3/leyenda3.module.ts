import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyenda3PageRoutingModule } from './leyenda3-routing.module';

import { Leyenda3Page } from './leyenda3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyenda3PageRoutingModule
  ],
  declarations: [Leyenda3Page]
})
export class Leyenda3PageModule {}
