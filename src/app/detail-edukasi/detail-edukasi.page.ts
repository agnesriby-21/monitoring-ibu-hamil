import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IbuService } from '../services/ibu.service';

@Component({
  selector: 'app-detail-edukasi',
  templateUrl: './detail-edukasi.page.html',
  styleUrls: ['./detail-edukasi.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class DetailEdukasiPage {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private ibuService: IbuService
  ) {}

  ionViewWillEnter() {
    const edukasi_id = this.route.snapshot.paramMap.get('edukasi_id');

    this.ibuService.getDetailEdukasi(edukasi_id).subscribe((res: any) => {
      this.data = res.data;
    });
  }
}