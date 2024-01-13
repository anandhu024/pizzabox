import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizeviewPageRoutingModule } from './sizeview-routing.module';

import { SizeviewPage } from './sizeview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizeviewPageRoutingModule
  ],
  declarations: [SizeviewPage]
})
export class SizeviewPageModule {}
