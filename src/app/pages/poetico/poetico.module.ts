import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoeticoPageRoutingModule } from './poetico-routing.module';

import { PoeticoPage } from './poetico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoeticoPageRoutingModule
  ],
  declarations: [PoeticoPage]
})
export class PoeticoPageModule {}
