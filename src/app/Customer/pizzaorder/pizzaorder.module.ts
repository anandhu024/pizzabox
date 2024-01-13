import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaorderPageRoutingModule } from './pizzaorder-routing.module';

import { PizzaorderPage } from './pizzaorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaorderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PizzaorderPage]
})
export class PizzaorderPageModule {}
