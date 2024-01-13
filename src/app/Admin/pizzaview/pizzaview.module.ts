import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaviewPageRoutingModule } from './pizzaview-routing.module';

import { PizzaviewPage } from './pizzaview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PizzaviewPage]
})
export class PizzaviewPageModule {}
