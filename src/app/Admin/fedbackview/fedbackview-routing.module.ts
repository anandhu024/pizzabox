import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FedbackviewPage } from './fedbackview.page';

const routes: Routes = [
  {
    path: '',
    component: FedbackviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedbackviewPageRoutingModule {}
