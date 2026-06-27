import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IbuService } from '../services/ibu.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class ReminderPage {
  judul: string = '';
  jenis_reminder: string = '';
  tanggal_reminder: string = '';

  reminder_list: any[] = [];

  constructor(
    private ibuService: IbuService
  ) {}

  ionViewWillEnter() {
    this.loadReminder();
  }

  loadReminder() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;

      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;

        this.ibuService.getReminder(kehamilan_id).subscribe((res: any) => {
          this.reminder_list = res.data;
        });
      });
    });
  }

  simpan() {
    const user_id = localStorage.getItem('user_id') || '';

    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;

      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;

        this.ibuService.saveReminder(
          kehamilan_id,
          this.judul,
          this.jenis_reminder,
          this.tanggal_reminder
        ).subscribe((res: any) => {
          if (res.result == 'success') {
            alert('Reminder berhasil ditambah');

            this.loadReminder();

            this.judul = '';
            this.jenis_reminder = '';
            this.tanggal_reminder = '';
          }
        });
      });
    });
  }

  selesai(reminder_id: string) {
    this.ibuService.updateReminder(
      reminder_id,
      'dibaca'
    ).subscribe((res: any) => {
      if (res.result == 'success') {
        this.loadReminder();
      }
    });
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';

    const bulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ];

    const d = new Date(tanggal);

    const jam = d.getHours().toString().padStart(2, '0');
    const menit = d.getMinutes().toString().padStart(2, '0');

    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}, ${jam}:${menit}`;
  }

  formatJenis(jenis: string): string {
    const map: any = {
      obat: 'Obat',
      vitamin: 'Vitamin',
      kontrol: 'Kontrol Dokter',
      olahraga: 'Olahraga',
      nutrisi: 'Nutrisi & Makan',
      istirahat: 'Istirahat',
      lainnya: 'Lainnya'
    };

    return map[jenis] || jenis;
  }
}