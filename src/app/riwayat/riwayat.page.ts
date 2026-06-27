import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IbuService } from '../services/ibu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class RiwayatPage {
  riwayat: any[] = [];
  riwayat_filtered: any[] = [];
  filter_aktif: string = 'semua';

  constructor(private ibuService: IbuService) { }

  ionViewWillEnter() {
    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;
        this.ibuService.getRiwayatBooking(kehamilan_id).subscribe((res: any) => {
          this.riwayat = res.data;
          this.filterRiwayat('semua');
        });
      });
    });
  }

  filterRiwayat(filter: string) {
    this.filter_aktif = filter;
    if (filter === 'semua') {
      this.riwayat_filtered = this.riwayat;
    } else {
      this.riwayat_filtered = this.riwayat.filter(
        (item: any) => item.status_booking === filter
      );
    }
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = new Date(tanggal);
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  formatJam(jam: string): string {
    if (!jam) return '';
    return jam.substring(0, 5);
  }

  formatStatus(status: string): string {
    const map: any = {
      'pending': 'Menunggu',
      'disetujui': 'Disetujui',
      'ditolak': 'Ditolak',
      'selesai': 'Selesai'
    };
    return map[status] || status;
  }
}