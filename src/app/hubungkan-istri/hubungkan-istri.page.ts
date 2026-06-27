import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SuamiService } from '../services/suami.service';

@Component({
  selector: 'app-hubungkan-istri',
  templateUrl: './hubungkan-istri.page.html',
  styleUrls: ['./hubungkan-istri.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class HubungkanIstriPage {
  kode_pasangan: string = '';

  constructor(
    private suamiService: SuamiService,
    private router: Router
  ) {}

  hubungkan() {
    const user_id = localStorage.getItem('user_id') || '';

    this.suamiService.hubungkanIstri(
      user_id,
      this.kode_pasangan
    ).subscribe((res: any) => {
      if (res.result == 'success') {
        alert('Berhasil terhubung');

        this.router.navigate([
          '/tabs-suami/dashboard'
        ]);
      } else {
        alert('Kode pasangan tidak ditemukan');
      }
    });
  }
}