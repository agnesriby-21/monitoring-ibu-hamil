import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DokterService } from '../services/dokter.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-masuk',
  templateUrl: './booking-masuk.page.html',
  styleUrls: ['./booking-masuk.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})

export class BookingMasukPage {
  booking_list: any[] = [];
  booking_filtered: any[] = [];
  filter_aktif: string = 'semua';
  expanded_id: string = '';

  constructor(
    private dokterService: DokterService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.loadBooking();
  }

  goBack() {
    this.location.back();
  }

  loadBooking() {
    const user_id = localStorage.getItem('user_id') || '';
    this.dokterService.getBookingMasuk(user_id).subscribe((res: any) => {
      this.booking_list = res.data;
      this.filterBooking(this.filter_aktif);
    });
  }

  filterBooking(filter: string) {
    this.filter_aktif = filter;
    if (filter === 'semua') {
      this.booking_filtered = this.booking_list;
    } else {
      this.booking_filtered = this.booking_list.filter(
        (item: any) => item.status_booking === filter
      );
    }
  }

  updateStatus(booking_id: string, status: string) {
    this.dokterService.updateStatusBooking(booking_id, status).subscribe((res: any) => {
      if (res.result == 'success') {
        this.loadBooking();
      }
    });
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

  toggleDetail(booking_id: string) {
    if (this.expanded_id === booking_id) {
      this.expanded_id = '';
    } else {
      this.expanded_id = booking_id;
    }
  }
}