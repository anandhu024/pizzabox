import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DessertsviewPageRoutingModule } from './dessertsview-routing.module';

import { DessertsviewPage } from './dessertsview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertsviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DessertsviewPage]
})
export class DessertsviewPageModule {}
