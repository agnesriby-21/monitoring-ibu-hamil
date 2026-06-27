import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IbuService } from '../services/ibu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-data-kehamilan',
  templateUrl: './data-kehamilan.page.html',
  styleUrls: ['./data-kehamilan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DataKehamilanPage {
  usia_kehamilan: string = '';
  hpht: string = '';

  constructor(
    private ibuService: IbuService,
    private location: Location
  ) { }

  hitungUsiaKehamilan() {
    if (!this.hpht) return;
    const hphtDate = new Date(this.hpht);
    const today = new Date();
    const diffMs = today.getTime() - hphtDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const minggu = Math.floor(diffDays / 7);
    this.usia_kehamilan = minggu.toString();
  }

  simpan() {
    if (!this.hpht) {
      alert('HPHT wajib diisi');
      return;
    }
    this.hitungUsiaKehamilan();
    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.saveKehamilan(ibu_id, this.hpht, this.usia_kehamilan).subscribe((res: any) => {
        if (res.result == 'success') {
          alert('Data kehamilan berhasil disimpan');
        } else {
          alert(res.message);
        }
      });
    });
  }

  goBack() {
    this.location.back();
  }

  ionViewWillEnter() {
    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.getKehamilan(ibu_id).subscribe((res: any) => {
        if (res.result == 'success') {
          this.hpht = res.data.hpht;
          this.usia_kehamilan = res.data.usia_kehamilan;
        }
      });
    });
  }
}