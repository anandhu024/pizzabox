import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FedbackeditPage } from './fedbackedit.page';

const routes: Routes = [
  {
    path: '',
    component: FedbackeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedbackeditPageRoutingModule {}
