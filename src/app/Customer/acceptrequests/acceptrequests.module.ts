import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptrequestsPageRoutingModule } from './acceptrequests-routing.module';

import { AcceptrequestsPage } from './acceptrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptrequestsPageRoutingModule
  ],
  declarations: [AcceptrequestsPage]
})
export class AcceptrequestsPageModule {}
