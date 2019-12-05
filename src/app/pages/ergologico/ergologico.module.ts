import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErgologicoPageRoutingModule } from './ergologico-routing.module';

import { ErgologicoPage } from './ergologico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErgologicoPageRoutingModule
  ],
  declarations: [ErgologicoPage]
})
export class ErgologicoPageModule {}
