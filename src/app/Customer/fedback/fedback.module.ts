import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FedbackPageRoutingModule } from './fedback-routing.module';

import { FedbackPage } from './fedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FedbackPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FedbackPage]
})
export class FedbackPageModule {}
