import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportdatePage } from './reportdate.page';

const routes: Routes = [
  {
    path: '',
    component: ReportdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportdatePageRoutingModule {}
