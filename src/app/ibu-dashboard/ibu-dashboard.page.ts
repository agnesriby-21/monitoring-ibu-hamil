import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IbuService } from '../services/ibu.service';

@Component({
  selector: 'app-ibu-dashboard',
  templateUrl: './ibu-dashboard.page.html',
  styleUrls: ['./ibu-dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class IbuDashboardPage {
  nama: string = '';
  hpht: string = '';
  trimester: string = '';
  progress: number = 0;

  booking_terdekat: any[] = [];
  kehamilan: any;

  constructor(
    private ibuService: IbuService
  ) {}

  ionViewWillEnter() {
    this.nama = localStorage.getItem('nama') || '';

    this.loadKehamilan();
    this.loadBookingTerdekat();
    this.cekKelengkapanData();
  }

  loadKehamilan() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;

      this.ibuService.getKehamilan(ibu_id).subscribe((res: any) => {
        if (res.result == 'success') {
          this.kehamilan = res.data;
          this.hpht = res.data.hpht;

          const minggu = Number(res.data.usia_kehamilan);

          /* TRIMESTER */
          if (minggu <= 12) {
            this.trimester = 'Trimester 1';
          } else if (minggu <= 27) {
            this.trimester = 'Trimester 2';
          } else {
            this.trimester = 'Trimester 3';
          }

          /* PROGRESS */
          this.progress = (minggu / 40) * 100;
        }
      });
    });
  }

  loadBookingTerdekat() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.getRiwayatBooking(user_id).subscribe((res: any) => {
      this.booking_terdekat = res.data.filter(
        (item: any) => item.status_booking != 'selesai'
      );
    });
  }

  cekKelengkapanData() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.getBiodataIbu(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        if (!res.data.nik || !res.data.no_hp) {
          setTimeout(() => {
            alert('Mohon lengkapi biodata Anda di menu Profile → Biodata Ibu');
          }, 1000);
        }
      }
    });
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';

    const bulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ];

    const d = new Date(tanggal);

    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  formatJam(jam: string): string {
    if (!jam) return '';

    return jam.substring(0, 5);
  }

  formatStatus(status: string): string {
    if (!status) return '';

    const map: any = {
      pending: 'Menunggu',
      disetujui: 'Disetujui',
      ditolak: 'Ditolak',
      selesai: 'Selesai'
    };

    return map[status] || status;
  }

  getStatusColor(status: string): string {
    const map: any = {
      pending: 'warning',
      disetujui: 'primary',
      ditolak: 'danger',
      selesai: 'success'
    };

    return map[status] || 'medium';
  }
}