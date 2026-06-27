import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahEdukasiPage } from './tambah-edukasi.page';

const routes: Routes = [
  {
    path: '',
    component: TambahEdukasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahEdukasiPageRoutingModule {}
