import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportdatePageRoutingModule } from './reportdate-routing.module';

import { ReportdatePage } from './reportdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportdatePageRoutingModule
  ],
  declarations: [ReportdatePage]
})
export class ReportdatePageModule {}
