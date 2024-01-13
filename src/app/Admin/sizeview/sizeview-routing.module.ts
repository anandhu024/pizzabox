import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizeviewPage } from './sizeview.page';

const routes: Routes = [
  {
    path: '',
    component: SizeviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeviewPageRoutingModule {}
