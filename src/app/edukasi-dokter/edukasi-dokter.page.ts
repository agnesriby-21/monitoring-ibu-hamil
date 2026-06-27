import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DokterService } from '../services/dokter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edukasi-dokter',
  templateUrl: './edukasi-dokter.page.html',
  styleUrls: ['./edukasi-dokter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class EdukasiDokterPage {
  edukasi_list: any[] = [];

  constructor(
    private dokterService: DokterService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.loadEdukasi();
  }

  goBack() {
    this.location.back();
  }

  loadEdukasi() {
    const dokter_id = localStorage.getItem('dokter_id') || '';
    this.dokterService.getEdukasiDokter(dokter_id).subscribe((res: any) => {
      this.edukasi_list = res.data;
    });
  }

  hapusEdukasi(edukasi_id: string) {
    if (confirm('Hapus artikel ini?')) {
      this.dokterService.deleteEdukasi(edukasi_id).subscribe((res: any) => {
        if (res.result === 'success') {
          this.loadEdukasi();
        } else {
          alert(res.message);
        }
      });
    }
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = new Date(tanggal);
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }
}