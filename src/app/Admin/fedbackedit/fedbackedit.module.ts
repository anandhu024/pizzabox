import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FedbackeditPageRoutingModule } from './fedbackedit-routing.module';

import { FedbackeditPage } from './fedbackedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FedbackeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FedbackeditPage]
})
export class FedbackeditPageModule {}
