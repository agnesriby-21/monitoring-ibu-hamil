import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DokterService } from '../services/dokter.service';

@Component({
  selector: 'app-tambah-edukasi',
  templateUrl: './tambah-edukasi.page.html',
  styleUrls: ['./tambah-edukasi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class TambahEdukasiPage {
  judul: string = '';
  isi: string = '';
  minggu_kehamilan: string = '';
  minggu_list: number[] = Array.from({ length: 40 }, (_, i) => i + 1);

  constructor(private dokterService: DokterService, private router: Router) { }

  simpan() {
    if (!this.judul || !this.isi || !this.minggu_kehamilan) {
      alert('Semua field wajib diisi');
      return;
    }
    const dokter_id = localStorage.getItem('dokter_id') || '';
    const data = { dokter_id, judul: this.judul, isi: this.isi, minggu_kehamilan: this.minggu_kehamilan };
    this.dokterService.saveEdukasi(data).subscribe((res: any) => {
      if (res.result == 'success') {
        alert('Artikel berhasil dibuat');
        this.router.navigate(['/edukasi-dokter']);
      } else {
        alert('Gagal simpan artikel');
      }
    }, error => {
      alert('Server error');
    });
  }
}