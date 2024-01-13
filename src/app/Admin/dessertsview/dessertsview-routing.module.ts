import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertsviewPage } from './dessertsview.page';

const routes: Routes = [
  {
    path: '',
    component: DessertsviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertsviewPageRoutingModule {}
