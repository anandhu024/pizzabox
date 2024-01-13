import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FedbackPage } from './fedback.page';

const routes: Routes = [
  {
    path: '',
    component: FedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedbackPageRoutingModule {}
