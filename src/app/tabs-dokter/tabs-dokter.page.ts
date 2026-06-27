import { Component }
from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  IonicModule
} from '@ionic/angular';


@Component({
  selector: 'app-tabs-dokter',

  templateUrl: './tabs-dokter.page.html',

  styleUrls: ['./tabs-dokter.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
    IonicModule
  ]

})

export class TabsDokterPage {

  constructor() { }

}