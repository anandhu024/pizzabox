import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmorepizzaPageRoutingModule } from './viewmorepizza-routing.module';

import { ViewmorepizzaPage } from './viewmorepizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmorepizzaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewmorepizzaPage]
})
export class ViewmorepizzaPageModule {}
