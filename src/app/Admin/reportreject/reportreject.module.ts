import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportrejectPageRoutingModule } from './reportreject-routing.module';

import { ReportrejectPage } from './reportreject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportrejectPageRoutingModule
  ],
  declarations: [ReportrejectPage]
})
export class ReportrejectPageModule {}
