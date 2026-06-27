import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRiwayatPage } from './detail-riwayat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRiwayatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRiwayatPageRoutingModule {}
