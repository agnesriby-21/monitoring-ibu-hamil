import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DokterService } from '../services/dokter.service';

@Component({
  selector: 'app-dokter-dashboard',
  templateUrl: './dokter-dashboard.page.html',
  styleUrls: ['./dokter-dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class DokterDashboardPage {
  nama: string = '';
  spesialisasi: string = '';

  total_pasien: number = 0;
  booking_hari_ini: number = 0;
  menunggu: number = 0;

  constructor(
    private dokterService: DokterService
  ) {}

  ionViewWillEnter() {
    this.loadDashboard();
    this.cekKelengkapanData();
  }

  loadDashboard() {
    const dokter_id = localStorage.getItem('dokter_id') || '';

    this.dokterService.getDashboardDokter(dokter_id).subscribe((res: any) => {
      const data = res.data;

      this.nama = data.nama;
      this.spesialisasi = data.spesialisasi;
      this.total_pasien = data.total_pasien;
      this.booking_hari_ini = data.booking_hari_ini;
      this.menunggu = data.menunggu;
    });
  }

  cekKelengkapanData() {
    const user_id = localStorage.getItem('user_id') || '';

    this.dokterService.getBiodataDokter(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        if (!res.data.spesialisasi || !res.data.no_hp || !res.data.no_str) {
          setTimeout(() => {
            alert('Mohon lengkapi biodata Anda di menu Profile → Biodata Dokter');
          }, 1000);
        }
      }
    });
  }
}