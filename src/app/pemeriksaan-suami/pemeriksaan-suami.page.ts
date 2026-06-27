import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SuamiService } from '../services/suami.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pemeriksaan-suami',
  templateUrl: './pemeriksaan-suami.page.html',
  styleUrls: ['./pemeriksaan-suami.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class PemeriksaanSuamiPage implements OnInit {
  pemeriksaan: any[] = [];

  constructor(
    private suamiService: SuamiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const user_id = localStorage.getItem('user_id') || '';
    this.suamiService.getPemeriksaanIstri(user_id).subscribe((res: any) => {
      if (res.result === 'success') {
        this.pemeriksaan = res.data;
      }
    });
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