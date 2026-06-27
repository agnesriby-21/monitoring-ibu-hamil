import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DokterService } from '../services/dokter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})

export class LoginPage {
  email: string = '';
  password: string = '';
  message: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dokterService: DokterService
  ) { }

  doLogin() {
    this.message = '';

    if (!this.email || !this.password) {
      this.message = 'Email dan password wajib diisi';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.message = 'Format email tidak valid';
      return;
    }

    if (this.password.length < 8) {
      this.message = 'Password minimal 8 karakter';
      return;
    }

    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result == 'success') {
        localStorage.setItem('user_id', res.user.user_id);
        localStorage.setItem('nama', res.user.nama);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('role', res.user.role);

        if (res.user.role == 'ibu') {
          this.router.navigate(['/tabs-ibu/beranda']);
        } else if (res.user.role == 'suami') {
          this.router.navigate(['/tabs-suami/beranda']);
        } else if (res.user.role == 'dokter') {
          this.dokterService.getDokterByUser(res.user.user_id).subscribe((dok: any) => {
            if (dok.data) {
              localStorage.setItem('dokter_id', dok.data.dokter_id);
            }
            this.router.navigate(['/tabs-dokter/dashboard']);
          });
        }
      } else {
        this.message = res.message;
      }
    }, error => {
      this.isLoading = false;
      this.message = 'Cannot connect to server';
    });
  }


}