import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringSuamiPage } from './monitoring-suami.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringSuamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringSuamiPageRoutingModule {}
