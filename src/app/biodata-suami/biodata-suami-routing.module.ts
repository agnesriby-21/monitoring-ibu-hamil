import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiodataSuamiPage } from './biodata-suami.page';

const routes: Routes = [
  {
    path: '',
    component: BiodataSuamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiodataSuamiPageRoutingModule {}
