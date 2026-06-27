import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  TabsDokterPage
} from './tabs-dokter.page';


const routes: Routes = [

  {
    path: '',

    component: TabsDokterPage,

    children: [

      {
        path: 'dashboard',

        loadComponent: () =>

          import('../dokter-dashboard/dokter-dashboard.page')

          .then(m => m.DokterDashboardPage)

      },

      {
        path: 'jadwal',

        loadComponent: () =>

          import('../jadwal-dokter/jadwal-dokter.page')

          .then(m => m.JadwalDokterPage)

      },

      {
        path: 'profile',

        loadComponent: () =>

          import('../profile/profile.page')

          .then(m => m.ProfilePage)

      },

      {
        path: 'booking',

        loadComponent: () =>

          import('../booking-masuk/booking-masuk.page')

          .then(m => m.BookingMasukPage)

      },

      {
        path: '',

        redirectTo: '/tabs-dokter/dashboard',

        pathMatch: 'full'

      }

    ]

  }

];


@NgModule({

  imports: [

    RouterModule.forChild(routes)

  ],

  exports: [

    RouterModule

  ]

})

export class TabsDokterPageRoutingModule {}