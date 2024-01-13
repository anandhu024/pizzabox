import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertorderPage } from './dessertorder.page';

const routes: Routes = [
  {
    path: '',
    component: DessertorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertorderPageRoutingModule {}
