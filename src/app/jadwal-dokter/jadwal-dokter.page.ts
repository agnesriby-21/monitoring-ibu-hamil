import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DokterService } from '../services/dokter.service';

@Component({
  selector: 'app-jadwal-dokter',
  templateUrl: './jadwal-dokter.page.html',
  styleUrls: ['./jadwal-dokter.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class JadwalDokterPage {
  hari: string = '';
  jam_mulai: string = '';
  jam_selesai: string = '';

  jadwal_list: any[] = [];

  constructor(
    private dokterService: DokterService,
    private location: Location
  ) {}

  ionViewWillEnter() {
    this.loadJadwal();
  }

  loadJadwal() {
    const dokter_id = localStorage.getItem('dokter_id') || '';

    this.dokterService.getJadwalDokter(dokter_id).subscribe((res: any) => {
      this.jadwal_list = res.data;
    });
  }

  simpan() {
    console.log('hari:', this.hari);
    console.log('jam_mulai:', this.jam_mulai);
    console.log('jam_selesai:', this.jam_selesai);

    if (!this.hari || !this.jam_mulai || !this.jam_selesai) {
      alert('Semua field wajib diisi');
      return;
    }

    const dokter_id = localStorage.getItem('dokter_id') || '';

    this.dokterService.saveJadwal(
      dokter_id,
      this.hari,
      this.jam_mulai,
      this.jam_selesai
    ).subscribe((res: any) => {
      console.log('response:', res);

      if (res.result == 'success') {
        alert('Jadwal berhasil ditambah');

        this.loadJadwal();

        this.hari = '';
        this.jam_mulai = '';
        this.jam_selesai = '';
      }
    });
  }

  goBack() {
    this.location.back();
  }

  formatJam(jam: string): string {
    if (!jam) return '';

    return jam.substring(0, 5);
  }

  hapusJadwal(jadwal_id: string) {
    if (confirm('Hapus jadwal ini?')) {
      this.dokterService.deleteJadwal(jadwal_id).subscribe((res: any) => {
        if (res.result === 'success') {
          this.loadJadwal();
        } else {
          alert(res.message);
        }
      });
    }
  }
}