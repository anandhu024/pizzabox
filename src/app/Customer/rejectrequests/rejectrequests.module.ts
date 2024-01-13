import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectrequestsPageRoutingModule } from './rejectrequests-routing.module';

import { RejectrequestsPage } from './rejectrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectrequestsPageRoutingModule
  ],
  declarations: [RejectrequestsPage]
})
export class RejectrequestsPageModule {}
