import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdukasiDokterPage } from './edukasi-dokter.page';

const routes: Routes = [
  {
    path: '',
    component: EdukasiDokterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdukasiDokterPageRoutingModule {}
