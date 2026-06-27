import { Component }
  from '@angular/core';

import {
  IonicModule
} from '@ionic/angular';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  IbuService
} from '../services/ibu.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-edukasi',

  templateUrl: './edukasi.page.html',

  styleUrls: ['./edukasi.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]

})

export class EdukasiPage {
  edukasi_list: any[] = [];
  edukasi_filtered: any[] = [];
  filter_aktif: string = 'semua';

  constructor(
    private ibuService: IbuService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.loadEdukasi();
  }

  goBack() {
    this.location.back();
  }

  loadEdukasi() {
    this.ibuService.getAllEdukasi().subscribe((res: any) => {
      this.edukasi_list = res.data;
      this.edukasi_filtered = res.data;
    });
  }

  filterEdukasi(filter: string) {
    this.filter_aktif = filter;
    if (filter === 'semua') {
      this.edukasi_filtered = this.edukasi_list;
    } else if (filter === 't1') {
      this.edukasi_filtered = this.edukasi_list.filter(
        (item: any) => item.minggu_kehamilan >= 1 && item.minggu_kehamilan <= 12
      );
    } else if (filter === 't2') {
      this.edukasi_filtered = this.edukasi_list.filter(
        (item: any) => item.minggu_kehamilan >= 13 && item.minggu_kehamilan <= 27
      );
    } else if (filter === 't3') {
      this.edukasi_filtered = this.edukasi_list.filter(
        (item: any) => item.minggu_kehamilan >= 28 && item.minggu_kehamilan <= 40
      );
    }
  }
}