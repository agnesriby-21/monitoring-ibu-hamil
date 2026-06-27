import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingMasukPage } from './booking-masuk.page';

const routes: Routes = [
  {
    path: '',
    component: BookingMasukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingMasukPageRoutingModule {}
