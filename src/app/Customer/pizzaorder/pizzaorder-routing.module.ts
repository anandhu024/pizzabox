import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaorderPage } from './pizzaorder.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaorderPageRoutingModule {}
