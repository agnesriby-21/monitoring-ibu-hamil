import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  TabsIbuPage
} from './tabs-ibu.page';


const routes: Routes = [

  {
    path: '',

    component: TabsIbuPage,

    children: [

      {
        path: 'beranda',

        loadComponent: () =>

          import('../ibu-dashboard/ibu-dashboard.page')

          .then(m => m.IbuDashboardPage)

      },

      {
        path: 'riwayat',

        loadComponent: () =>

          import('../riwayat/riwayat.page')

          .then(m => m.RiwayatPage)

      },

      {
        path: 'reminder',

        loadComponent: () =>

          import('../reminder/reminder.page')

          .then(m => m.ReminderPage)

      },

      {
        path: 'profile',

        loadComponent: () =>

          import('../profile/profile.page')

          .then(m => m.ProfilePage)

      },

      {
        path: '',

        redirectTo: 'beranda',

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

export class TabsIbuPageRoutingModule {}