import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SuamiService } from '../services/suami.service';

@Component({
  selector: 'app-biodata-suami',
  templateUrl: './biodata-suami.page.html',
  styleUrls: ['./biodata-suami.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class BiodataSuamiPage {
  nik: string = '';
  tanggal_lahir: string = '';
  alamat: string = '';
  no_hp: string = '';
  pekerjaan: string = '';

  constructor(
    private suamiService: SuamiService,
    private location: Location
  ) {}

  simpan() {
    const user_id = localStorage.getItem('user_id') || '';

    this.suamiService.saveBiodataSuami(
      user_id,
      this.nik,
      this.tanggal_lahir,
      this.alamat,
      this.no_hp,
      this.pekerjaan
    ).subscribe((res: any) => {
      if (res.result == 'success') {
        alert('Biodata berhasil disimpan');
      } else {
        alert(res.message);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ionViewWillEnter() {
    const user_id = localStorage.getItem('user_id') || '';

    this.suamiService.getBiodataSuami(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        this.nik = res.data.nik;
        this.tanggal_lahir = res.data.tanggal_lahir;
        this.alamat = res.data.alamat;
        this.no_hp = res.data.no_hp;
        this.pekerjaan = res.data.pekerjaan;
      }
    });
  }
}