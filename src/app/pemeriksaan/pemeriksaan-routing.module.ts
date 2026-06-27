import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PemeriksaanPage } from './pemeriksaan.page';

const routes: Routes = [
  {
    path: '',
    component: PemeriksaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PemeriksaanPageRoutingModule {}
