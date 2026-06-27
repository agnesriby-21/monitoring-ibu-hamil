import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IbuService } from '../services/ibu.service';

@Component({
  selector: 'app-biodata-ibu',
  templateUrl: './biodata-ibu.page.html',
  styleUrls: ['./biodata-ibu.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class BiodataIbuPage {
  nik: string = '';
  tanggal_lahir: string = '';
  alamat: string = '';
  no_hp: string = '';
  golongan_darah: string = '';
  kontak_darurat: string = '';

  constructor(
    private ibuService: IbuService,
    private location: Location
  ) {}

  simpan() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.saveBiodataIbu(
      user_id,
      this.nik,
      this.tanggal_lahir,
      this.alamat,
      this.no_hp,
      this.golongan_darah,
      this.kontak_darurat
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

    this.ibuService.getBiodataIbu(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        this.nik = res.data.nik;
        this.tanggal_lahir = res.data.tanggal_lahir;
        this.alamat = res.data.alamat;
        this.no_hp = res.data.no_hp;
        this.golongan_darah = res.data.golongan_darah;
        this.kontak_darurat = res.data.kontak_darurat;
      }
    });
  }
}