import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsSuamiPage } from './tabs-suami.page';

const routes: Routes = [
  {
    path: '',
    component: TabsSuamiPage,
    children: [
      {
        path: 'beranda',
        loadComponent: () => import('../suami-dashboard/suami-dashboard.page').then(m => m.SuamiDashboardPage)
      },
      {
        path: 'checklist',
        loadComponent: () => import('../checklist-suami/checklist-suami.page').then(m => m.ChecklistSuamiPage)
      },
      {
        path: 'pemeriksaan',
        loadComponent: () => import('../pemeriksaan-suami/pemeriksaan-suami.page').then(m => m.PemeriksaanSuamiPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.page').then(m => m.ProfilePage)
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsSuamiPageRoutingModule { }