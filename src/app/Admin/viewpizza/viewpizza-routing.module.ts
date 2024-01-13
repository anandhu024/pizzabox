import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpizzaPage } from './viewpizza.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpizzaPageRoutingModule {}
