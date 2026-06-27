import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubungkanIstriPageRoutingModule } from './hubungkan-istri-routing.module';

import { HubungkanIstriPage } from './hubungkan-istri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HubungkanIstriPageRoutingModule
  ],
  declarations: [HubungkanIstriPage]
})
export class HubungkanIstriPageModule {}
