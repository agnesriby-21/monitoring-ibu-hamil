import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IbuService } from '../services/ibu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-monitoring-kehamilan',
  templateUrl: './monitoring-kehamilan.page.html',
  styleUrls: ['./monitoring-kehamilan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MonitoringKehamilanPage {
  berat_badan: string = '';
  tekanan_darah: string = '';
  denyut_jantung_janin: string = '';
  gerakan_janin: string = '';
  keluhan: string = '';
  catatan: string = '';
  tanggal_monitoring: string = '';
  monitoring_list: any[] = [];

  constructor(
    private ibuService: IbuService,
    private location: Location
  ) { }

  simpan() {
    console.log('berat:', this.berat_badan);
    console.log('tekanan:', this.tekanan_darah);
    console.log('tanggal:', this.tanggal_monitoring);
    if (!this.berat_badan || !this.tekanan_darah || !this.tanggal_monitoring) {
      alert('Berat badan, tekanan darah, dan tanggal wajib diisi');
      return;
    }

    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;
        this.ibuService.saveMonitoring(
          kehamilan_id,
          this.tanggal_monitoring,
          this.berat_badan,
          this.tekanan_darah,
          this.denyut_jantung_janin,
          this.gerakan_janin,
          this.keluhan,
          this.catatan
        ).subscribe((res: any) => {
          if (res.result == 'success') {
            alert('Monitoring berhasil disimpan');
            this.berat_badan = '';
            this.tekanan_darah = '';
            this.denyut_jantung_janin = '';
            this.gerakan_janin = '';
            this.keluhan = '';
            this.catatan = '';
            this.tanggal_monitoring = '';
            this.loadMonitoring();
          } else {
            alert(res.message);
          }
        });
      });
    });
  }

  loadMonitoring() {
    const user_id = localStorage.getItem('user_id') || '';
    this.ibuService.getBiodataIbu(user_id).subscribe((bio: any) => {
      const ibu_id = bio.data.ibu_id;
      this.ibuService.getKehamilan(ibu_id).subscribe((hamil: any) => {
        const kehamilan_id = hamil.data.kehamilan_id;
        this.ibuService.getMonitoring(kehamilan_id).subscribe((res: any) => {
          this.monitoring_list = res.data;
        });
      });
    });
  }

  ionViewWillEnter() {
    this.loadMonitoring();
  }

  goBack() {
    this.location.back();
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = new Date(tanggal);
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }
}