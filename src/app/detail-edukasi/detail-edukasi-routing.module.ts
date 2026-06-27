import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEdukasiPage } from './detail-edukasi.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEdukasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEdukasiPageRoutingModule {}
