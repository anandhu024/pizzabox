import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportacceptPage } from './reportaccept.page';

const routes: Routes = [
  {
    path: '',
    component: ReportacceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportacceptPageRoutingModule {}
