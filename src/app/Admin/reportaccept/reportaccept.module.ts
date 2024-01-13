import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportacceptPageRoutingModule } from './reportaccept-routing.module';

import { ReportacceptPage } from './reportaccept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportacceptPageRoutingModule
  ],
  declarations: [ReportacceptPage]
})
export class ReportacceptPageModule {}
