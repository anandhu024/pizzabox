import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaeditPageRoutingModule } from './pizzaedit-routing.module';

import { PizzaeditPage } from './pizzaedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PizzaeditPage]
})
export class PizzaeditPageModule {}
