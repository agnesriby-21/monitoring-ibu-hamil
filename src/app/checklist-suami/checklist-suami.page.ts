import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { SuamiService } from '../services/suami.service';

@Component({
  selector: 'app-checklist-suami',
  templateUrl: './checklist-suami.page.html',
  styleUrls: ['./checklist-suami.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})

export class ChecklistSuamiPage {
  judul: string = '';
  checklist: any[] = [];

  constructor(
    private suamiService: SuamiService
  ) { }


  ionViewWillEnter() {
    this.loadData();
  }


  loadData() {
    const user_id = localStorage.getItem('user_id') || '';
    this.suamiService.getChecklistSuami(user_id).subscribe((res: any) => {
      if (res.result == 'success') {
        // hanya tampilkan yang belum selesai
        this.checklist = res.data.filter(
          (item: any) => item.status_tugas !== 'selesai'
        );
      }
    });
  }


  tambahTugas() {
    const user_id = localStorage.getItem('user_id') || '';
    const data = {
      user_id: parseInt(user_id),
      judul: this.judul
    };

    this.suamiService.saveChecklistSuami(data).subscribe((res: any) => {
      if (res.result == 'success') {
        alert('Tugas berhasil ditambahkan');
        this.judul = '';
        this.loadData();
      } else {
        alert(res.message);
      }
    });
  }

  toggleStatus(item: any) {
    this.suamiService.deleteChecklistSuami(item.checklist_id).subscribe((res: any) => {
      if (res.result === 'success') {
        this.checklist = this.checklist.filter(
          (c: any) => c.checklist_id !== item.checklist_id
        );
      } else {
        alert(res.message);
      }
    });
  }

}