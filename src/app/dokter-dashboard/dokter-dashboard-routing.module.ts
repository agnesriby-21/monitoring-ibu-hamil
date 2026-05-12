import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DokterDashboardPage } from './dokter-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DokterDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DokterDashboardPageRoutingModule {}
