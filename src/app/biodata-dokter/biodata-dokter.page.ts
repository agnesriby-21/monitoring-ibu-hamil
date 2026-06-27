import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { DokterService } from '../services/dokter.service';

@Component({
  selector: 'app-biodata-dokter',
  templateUrl: './biodata-dokter.page.html',
  styleUrls: ['./biodata-dokter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class BiodataDokterPage {
  nama: string = '';
  spesialisasi: string = '';
  no_hp: string = '';
  no_str: string = '';

  constructor(
    private dokterService: DokterService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    const user_id = localStorage.getItem('user_id') || '';
    this.nama = localStorage.getItem('nama') || '';
    this.dokterService.getBiodataDokter(user_id).subscribe((res: any) => {
      if (res.data) {
        this.spesialisasi = res.data.spesialisasi;
        this.no_hp = res.data.no_hp;
        this.no_str = res.data.no_str;
      }
    });
  }

  simpan() {
    if (!this.spesialisasi || !this.no_hp || !this.no_str) {
      alert('Semua field wajib diisi');
      return;
    }
    const user_id = localStorage.getItem('user_id') || '';
    this.dokterService.saveBiodataDokter(user_id, this.spesialisasi, this.no_hp, this.no_str)
      .subscribe((res: any) => {
        if (res.result == 'success') {
          alert('Biodata berhasil disimpan');
          this.location.back();
        }
      });
  }

  goBack() {
    this.location.back();
  }
}