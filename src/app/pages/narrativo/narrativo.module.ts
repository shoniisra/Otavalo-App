import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NarrativoPageRoutingModule } from './narrativo-routing.module';

import { NarrativoPage } from './narrativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NarrativoPageRoutingModule
  ],
  declarations: [NarrativoPage]
})
export class NarrativoPageModule {}
