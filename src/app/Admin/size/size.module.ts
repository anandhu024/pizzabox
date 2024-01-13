import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizePageRoutingModule } from './size-routing.module';

import { SizePage } from './size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SizePage]
})
export class SizePageModule {}
