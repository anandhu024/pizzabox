import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DessertorderPageRoutingModule } from './dessertorder-routing.module';

import { DessertorderPage } from './dessertorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertorderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DessertorderPage]
})
export class DessertorderPageModule {}
