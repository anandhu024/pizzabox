import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertseditPage } from './dessertsedit.page';

const routes: Routes = [
  {
    path: '',
    component: DessertseditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertseditPageRoutingModule {}
