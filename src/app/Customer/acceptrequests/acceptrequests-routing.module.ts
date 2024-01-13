import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptrequestsPage } from './acceptrequests.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptrequestsPageRoutingModule {}
