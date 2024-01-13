import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesertindexPage } from './desertindex.page';

const routes: Routes = [
  {
    path: '',
    component: DesertindexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesertindexPageRoutingModule {}
