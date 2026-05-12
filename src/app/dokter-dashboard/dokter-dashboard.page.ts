import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dokter-dashboard',
  templateUrl: './dokter-dashboard.page.html',
  styleUrls: ['./dokter-dashboard.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule
  ] 

})
export class DokterDashboardPage {

  constructor() { }

}

