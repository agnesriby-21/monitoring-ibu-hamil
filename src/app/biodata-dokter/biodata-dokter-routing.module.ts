import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiodataDokterPage } from './biodata-dokter.page';

const routes: Routes = [
  {
    path: '',
    component: BiodataDokterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiodataDokterPageRoutingModule {}
