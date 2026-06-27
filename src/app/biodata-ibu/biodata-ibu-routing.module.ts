import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiodataIbuPage } from './biodata-ibu.page';

const routes: Routes = [
  {
    path: '',
    component: BiodataIbuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiodataIbuPageRoutingModule {}
