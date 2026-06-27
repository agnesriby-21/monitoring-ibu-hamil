import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',

    loadComponent: () =>
      import('./home/home.page')
        .then(m => m.HomePage)
  },

  {
    path: 'login',

    loadComponent: () =>
      import('./login/login.page')
        .then(m => m.LoginPage)
  },
  {
    path: 'ibu-dashboard',

    loadComponent: () =>
      import('./ibu-dashboard/ibu-dashboard.page')
        .then(m => m.IbuDashboardPage)
  },

  {
    path: 'suami-dashboard',

    loadComponent: () =>
      import('./suami-dashboard/suami-dashboard.page')
        .then(m => m.SuamiDashboardPage)
  },

  {
    path: 'dokter-dashboard',

    loadComponent: () =>
      import('./dokter-dashboard/dokter-dashboard.page')
        .then(m => m.DokterDashboardPage)
  },

  {
    path: 'register',

    loadComponent: () =>
      import('./register/register.page')
        .then(m => m.RegisterPage)
  },

  {
    path: 'profile',

    loadComponent: () =>
      import('./profile/profile.page')
        .then(m => m.ProfilePage)
  },
  {
    path: 'biodata-ibu',

    loadComponent: () =>
      import('./biodata-ibu/biodata-ibu.page')
        .then(m => m.BiodataIbuPage)
  },
  {
    path: 'data-kehamilan',

    loadComponent: () =>
      import('./data-kehamilan/data-kehamilan.page')
        .then(m => m.DataKehamilanPage)
  },
  {
    path: 'monitoring-kehamilan',

    loadComponent: () =>
      import('./monitoring-kehamilan/monitoring-kehamilan.page')
        .then(m => m.MonitoringKehamilanPage)
  },
  {
    path: 'tabs-ibu',

    loadChildren: () =>

      import('./tabs-ibu/tabs-ibu-routing.module')

        .then(m => m.TabsIbuPageRoutingModule)

  },
  {
    path: 'riwayat',

    loadComponent: () =>
      import('./riwayat/riwayat.page')
        .then(m => m.RiwayatPage)
  },
  {
    path: 'reminder',

    loadComponent: () =>
      import('./reminder/reminder.page')
        .then(m => m.ReminderPage)
  },
  {
    path: 'booking',

    loadComponent: () =>

      import('./booking/booking.page')

        .then(m => m.BookingPage)

  },
  {
    path: 'biodata-dokter',

    loadComponent: () =>

      import('./biodata-dokter/biodata-dokter.page')

        .then(m => m.BiodataDokterPage)

  },
  {
    path: 'jadwal-dokter',

    loadComponent: () =>

      import('./jadwal-dokter/jadwal-dokter.page')

        .then(m => m.JadwalDokterPage)

  },
  {
    path: 'tabs-dokter',

    loadChildren: () =>

      import('./tabs-dokter/tabs-dokter-routing.module')

        .then(m => m.TabsDokterPageRoutingModule)

  },
  {
    path: 'booking-masuk',

    loadComponent: () =>

      import('./booking-masuk/booking-masuk.page')

        .then(m => m.BookingMasukPage)

  },
  {
    path: 'pemeriksaan/:booking_id',

    loadComponent: () =>

      import('./pemeriksaan/pemeriksaan.page')

        .then(m => m.PemeriksaanPage)

  },
  {
    path: 'detail-riwayat/:booking_id',

    loadComponent: () =>

      import('./detail-riwayat/detail-riwayat.page')

        .then(m => m.DetailRiwayatPage)

  },
  {
    path: 'tambah-edukasi',

    loadComponent: () =>

      import('./tambah-edukasi/tambah-edukasi.page')

        .then(m => m.TambahEdukasiPage)
  },
  {
    path: 'edukasi-dokter',
    loadComponent: () =>
      import('./edukasi-dokter/edukasi-dokter.page')
        .then(m => m.EdukasiDokterPage)
  },
  {
    path: 'edukasi',
    loadComponent: () =>
      import('./edukasi/edukasi.page')
        .then(m => m.EdukasiPage)
  },
  {
    path: 'detail-edukasi/:edukasi_id',

    loadComponent: () =>

      import('./detail-edukasi/detail-edukasi.page')

        .then(m => m.DetailEdukasiPage)

  },
  {
    path: 'hubungkan-istri',

    loadComponent: () => import(
      './hubungkan-istri/hubungkan-istri.page'
    ).then(m => m.HubungkanIstriPage)
  },
  {
    path: 'monitoring-suami',

    loadComponent: () => import(
      './monitoring-suami/monitoring-suami.page'
    ).then(m => m.MonitoringSuamiPage)
  },
  {
    path: 'pemeriksaan-suami',
    loadComponent: () => import(
      './pemeriksaan-suami/pemeriksaan-suami.page'
    ).then(m => m.PemeriksaanSuamiPage)
  },
  {
    path: 'biodata-suami',

    loadComponent: () => import(
      './biodata-suami/biodata-suami.page'
    ).then(m => m.BiodataSuamiPage)
  },
  {
    path: 'checklist-suami',
    loadComponent: () => import(
      './checklist-suami/checklist-suami.page'
    ).then(m => m.ChecklistSuamiPage)
  },
  {
    path: 'tabs-suami',
    loadChildren: () => import('./tabs-suami/tabs-suami-routing.module')
      .then(m => m.TabsSuamiPageRoutingModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
