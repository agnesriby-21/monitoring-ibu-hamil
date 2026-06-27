import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringKehamilanPage } from './monitoring-kehamilan.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringKehamilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringKehamilanPageRoutingModule {}
