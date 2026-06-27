import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs-suami',
  templateUrl: './tabs-suami.page.html',
  styleUrls: ['./tabs-suami.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class TabsSuamiPage {
  constructor() { }
}