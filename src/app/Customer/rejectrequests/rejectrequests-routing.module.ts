import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectrequestsPage } from './rejectrequests.page';

const routes: Routes = [
  {
    path: '',
    component: RejectrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectrequestsPageRoutingModule {}
