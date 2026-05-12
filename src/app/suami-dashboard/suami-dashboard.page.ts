import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suami-dashboard',
  templateUrl: './suami-dashboard.page.html',
  styleUrls: ['./suami-dashboard.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule
  ]

})
export class SuamiDashboardPage {

  constructor() { }

}
