import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DokterService } from '../services/dokter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pemeriksaan',
  templateUrl: './pemeriksaan.page.html',
  styleUrls: ['./pemeriksaan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PemeriksaanPage {
  booking_id: string = '';
  ibu_id: string = '';
  dokter_id: string = '';
  tanggal_periksa: string = '';
  usia_kehamilan: string = '';
  berat_badan: string = '';
  tekanan_darah: string = '';
  denyut_jantung_janin: string = '';
  keluhan: string = '';
  catatan_dokter: string = '';
  nama_pasien: string = '';
  today: string = new Date().toISOString().split('T')[0];

  constructor(
    private route: ActivatedRoute,
    private dokterService: DokterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.booking_id = this.route.snapshot.paramMap.get('booking_id') || '';
    const user_id = localStorage.getItem('user_id') || '';

    this.dokterService.getDokterByUser(user_id).subscribe((res: any) => {
      this.dokter_id = res.data.dokter_id;
    });

    this.dokterService.getBookingDetail(this.booking_id).subscribe((res: any) => {
      this.ibu_id = res.data.ibu_id;
      this.nama_pasien = res.data.nama_lengkap;
      this.usia_kehamilan = res.data.usia_kehamilan;
      this.keluhan = res.data.keluhan;
      this.tanggal_periksa = this.today;
    });
  }

  simpan() {
    if (!this.tanggal_periksa || !this.berat_badan || !this.tekanan_darah) {
      alert('Tanggal, berat badan, dan tekanan darah wajib diisi');
      return;
    }

    const data = {
      booking_id: this.booking_id,
      dokter_id: this.dokter_id,
      ibu_id: this.ibu_id,
      tanggal_periksa: this.tanggal_periksa,
      usia_kehamilan: this.usia_kehamilan,
      berat_badan: this.berat_badan,
      tekanan_darah: this.tekanan_darah,
      denyut_jantung_janin: this.denyut_jantung_janin,
      keluhan: this.keluhan,
      catatan_dokter: this.catatan_dokter
    };

    this.dokterService.savePemeriksaan(data).subscribe((res: any) => {
      if (res.result == 'success') {
        this.dokterService.selesaiBooking(this.booking_id).subscribe();
        alert('Pemeriksaan berhasil disimpan');
        this.location.back();
      } else {
        alert(res.message);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}