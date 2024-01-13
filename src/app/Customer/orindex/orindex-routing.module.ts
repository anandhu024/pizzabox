import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrindexPage } from './orindex.page';

const routes: Routes = [
  {
    path: '',
    component: OrindexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrindexPageRoutingModule {}
