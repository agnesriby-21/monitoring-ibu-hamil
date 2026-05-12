import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuamiDashboardPage } from './suami-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SuamiDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuamiDashboardPageRoutingModule {}
