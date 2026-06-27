import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalDokterPage } from './jadwal-dokter.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalDokterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalDokterPageRoutingModule {}
