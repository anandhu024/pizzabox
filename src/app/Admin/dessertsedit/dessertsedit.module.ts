import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DessertseditPageRoutingModule } from './dessertsedit-routing.module';

import { DessertseditPage } from './dessertsedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertseditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DessertseditPage]
})
export class DessertseditPageModule {}
