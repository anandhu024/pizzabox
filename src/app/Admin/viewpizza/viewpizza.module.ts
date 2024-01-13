import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpizzaPageRoutingModule } from './viewpizza-routing.module';

import { ViewpizzaPage } from './viewpizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpizzaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewpizzaPage]
})
export class ViewpizzaPageModule {}
