import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistSuamiPage } from './checklist-suami.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistSuamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistSuamiPageRoutingModule {}
