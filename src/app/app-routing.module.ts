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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
