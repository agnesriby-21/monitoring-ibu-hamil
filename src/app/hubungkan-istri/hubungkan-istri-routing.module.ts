import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubungkanIstriPage } from './hubungkan-istri.page';

const routes: Routes = [
  {
    path: '',
    component: HubungkanIstriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubungkanIstriPageRoutingModule {}
