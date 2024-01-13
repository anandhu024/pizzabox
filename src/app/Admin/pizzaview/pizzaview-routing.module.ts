import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaviewPage } from './pizzaview.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaviewPageRoutingModule {}
