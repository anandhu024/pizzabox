import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmorepizzaPage } from './viewmorepizza.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmorepizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmorepizzaPageRoutingModule {}
