import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelletPageRoutingModule } from './pellet-routing.module';

import { PelletPage } from './pellet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelletPageRoutingModule
  ],
  declarations: [PelletPage]
})
export class PelletPageModule {}
