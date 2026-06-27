import { Component } from '@angular/core';

import {
  IonicModule
} from '@ionic/angular';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

@Component({
  selector: 'app-tabs-ibu',

  templateUrl: './tabs-ibu.page.html',

  styleUrls: ['./tabs-ibu.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]

})

export class TabsIbuPage {

  constructor() { }

}