import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportrejectPage } from './reportreject.page';

const routes: Routes = [
  {
    path: '',
    component: ReportrejectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportrejectPageRoutingModule {}
