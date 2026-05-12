import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ibu-dashboard',
  templateUrl: './ibu-dashboard.page.html',
  styleUrls: ['./ibu-dashboard.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule
  ]

})

export class IbuDashboardPage {

  constructor() { }

}