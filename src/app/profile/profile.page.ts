import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IbuService } from '../services/ibu.service';
import { SuamiService } from '../services/suami.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export class ProfilePage {
  nama: string = '';
  email: string = '';
  role: string = '';
  kode_pasangan: string = '';
  input_kode: string = '';
  sudah_terhubung: boolean = false;

  constructor(
    private router: Router,
    private ibuService: IbuService,
    private suamiService: SuamiService
  ) { }

  ionViewWillEnter() {
    this.nama = localStorage.getItem('nama') || '';
    this.email = localStorage.getItem('email') || '';
    this.role = localStorage.getItem('role') || '';
    const user_id = localStorage.getItem('user_id') || '';

    console.log('role:', this.role);
    console.log('user_id:', user_id);

    if (this.role == 'ibu') {
      this.ibuService.getBiodataIbu(user_id).subscribe((res: any) => {
        console.log('response biodata:', res);
        if (res.result == 'success') {
          this.kode_pasangan = res.data.kode_pasangan;
          console.log('kode_pasangan set:', this.kode_pasangan);
        }
      });
    }

    if (this.role == 'suami') {
      this.suamiService.getBiodataSuami(user_id).subscribe((res: any) => {
        if (res.result == 'success') {
          this.sudah_terhubung = res.data.ibu_id !== null;
        }
      });
    }

  }

  hubungkanIstri() {
    if (this.input_kode == '') {
      alert('Masukkan kode pasangan terlebih dahulu');
      return;
    }
    const user_id = localStorage.getItem('user_id') || '';
    console.log('Kirim:', user_id, this.input_kode);

    this.suamiService.hubungkanIstri(user_id, this.input_kode).subscribe((res: any) => {
      console.log('res:', res);
      if (res.result === 'success') {
        alert('Berhasil terhubung!');
        this.sudah_terhubung = true;
        this.input_kode = '';
      } else {
        alert(res.message);
      }
    }, error => {
      console.log('status:', error.status);
      console.log('error:', error.error);
      console.log('text:', error.error?.text);
      alert(error.error?.text || JSON.stringify(error.error));
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  showKodePasangan() {
    alert('Kode Pasangan:\n\n' + this.kode_pasangan);
  }

  copyKode() {
    navigator.clipboard.writeText(this.kode_pasangan);
    alert('Kode berhasil dicopy');
  }
}