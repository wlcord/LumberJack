import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelletPage } from './pellet.page';

const routes: Routes = [
  {
    path: '',
    component: PelletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelletPageRoutingModule {}
