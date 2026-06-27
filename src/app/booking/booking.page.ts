import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IbuService } from '../services/ibu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BookingPage {
  dokter_list: any[] = [];
  dokter_id: string = '';
  jadwal_id: string = '';
  tanggal_booking: string = '';
  keluhan: string = '';
  jadwal_list: any[] = [];
  dokter_selected: any = null;
  today: string = new Date().toISOString().split('T')[0];

  constructor(
    private ibuService: IbuService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.loadDokter();
  }

  loadDokter() {
    this.ibuService.getDokter().subscribe((res: any) => {
      this.dokter_list = res.data;
    });
  }

  loadJadwal() {
    if (!this.dokter_id) return;
    // reset jadwal saat ganti dokter
    this.jadwal_id = '';
    this.jadwal_list = [];
    // cari info dokter yang dipilih
    this.dokter_selected = this.dokter_list.find(
      (d: any) => d.dokter_id == this.dokter_id
    );
    this.ibuService.getJadwalByDokter(this.dokter_id).subscribe((res: any) => {
      this.jadwal_list = res.data;
    });
  }

  goBack() {
    this.location.back();
  }

  formatJam(jam: string): string {
    if (!jam) return '';
    return jam.substring(0, 5);
  }

  booking() {
    if (!this.dokter_id || !this.jadwal_id || !this.tanggal_booking) {
      alert('Pilih dokter, jadwal, dan tanggal booking terlebih dahulu');
      return;
    }
    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;
        this.ibuService.saveBooking(
          kehamilan_id,
          this.dokter_id,
          this.jadwal_id,
          this.tanggal_booking,
          this.keluhan
        ).subscribe((res: any) => {
          if (res.result == 'success') {
            alert('Booking berhasil!');
            this.dokter_id = '';
            this.jadwal_id = '';
            this.tanggal_booking = '';
            this.keluhan = '';
            this.jadwal_list = [];
            this.dokter_selected = null;
          } else {
            alert('Booking gagal: ' + res.message);
          }
        });
      });
    });
  }
}