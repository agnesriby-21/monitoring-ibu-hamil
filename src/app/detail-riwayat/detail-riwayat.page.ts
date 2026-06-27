import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IbuService } from '../services/ibu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-riwayat',
  templateUrl: './detail-riwayat.page.html',
  styleUrls: ['./detail-riwayat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class DetailRiwayatPage {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private ibuService: IbuService,
    private location: Location
  ) { }

  ngOnInit() {
    const booking_id = this.route.snapshot.paramMap.get('booking_id') || '';
    this.ibuService.getDetailPemeriksaan(booking_id).subscribe((res: any) => {
      this.data = res.data;
    });
  }

  formatTanggal(tanggal: string): string {
    if (!tanggal) return '';
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = new Date(tanggal);
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  goBack() {
    this.location.back();
  }
}