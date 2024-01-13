import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesertindexPageRoutingModule } from './desertindex-routing.module';

import { DesertindexPage } from './desertindex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesertindexPageRoutingModule
  ],
  declarations: [DesertindexPage]
})
export class DesertindexPageModule {}
