import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicoPageRoutingModule } from './magico-routing.module';

import { MagicoPage } from './magico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicoPageRoutingModule
  ],
  declarations: [MagicoPage]
})
export class MagicoPageModule {}
