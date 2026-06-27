import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SuamiService } from '../services/suami.service';

@Component({
  selector: 'app-dashboard-suami',
  templateUrl: './suami-dashboard.page.html',
  styleUrls: ['./suami-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class SuamiDashboardPage {
  nama: string = '';
  nama_istri: string = '';
  usia_kehamilan: string = '';
  hpht: string = '';
  booking_list: any[] = [];

  constructor(
    private suamiService: SuamiService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.nama = localStorage.getItem('nama') || '';
    const user_id = localStorage.getItem('user_id') || '';
    this.cekKelengkapanData(user_id);

    this.suamiService.getDataIstri(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        this.nama_istri = res.data.nama_lengkap;
        this.usia_kehamilan = res.data.usia_kehamilan;
        this.hpht = res.data.hpht;
      }
    });

    this.suamiService.getBookingIstri(user_id).subscribe((res: any) => {
      this.booking_list = res.data;
    });
  }

  cekKelengkapanData(user_id: string) {
    this.suamiService.getBiodataSuami(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        if (!res.data.ibu_id) {
          setTimeout(() => {
            alert('Hubungkan akun Anda dengan istri melalui menu Profile menggunakan kode pasangan.');
          }, 1000);
        } else if (!res.data.nik || !res.data.no_hp) {
          setTimeout(() => {
            alert('Mohon lengkapi biodata Anda di menu Profile → Biodata Suami');
          }, 1000);
        }
      }
    });
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}