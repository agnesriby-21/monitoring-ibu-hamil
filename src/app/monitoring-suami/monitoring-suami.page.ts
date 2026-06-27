import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SuamiService } from '../services/suami.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-monitoring-suami',
  templateUrl: './monitoring-suami.page.html',
  styleUrls: ['./monitoring-suami.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class MonitoringSuamiPage implements OnInit {
  monitoring: any[] = [];

  constructor(
    private suamiService: SuamiService,
    private location: Location

  ) { }

  ngOnInit() {
    this.loadData();
  }

  goBack() {
    this.location.back();
  }

  loadData() {
    const user_id = localStorage.getItem('user_id') || '';
    console.log('user_id:', user_id);
    this.suamiService.getMonitoringIstri(user_id).subscribe((res: any) => {
      console.log('response:', res);
      if (res.result === 'success') {
        this.monitoring = res.data;
      } else {
        console.log('gagal:', res.message);
      }
    });
  }
}