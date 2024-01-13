import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrindexPageRoutingModule } from './orindex-routing.module';

import { OrindexPage } from './orindex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrindexPageRoutingModule
  ],
  declarations: [OrindexPage]
})
export class OrindexPageModule {}
