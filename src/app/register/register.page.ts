import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class RegisterPage {
  nama: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  role: string = '';

  message: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  doRegister() {
    this.message = '';

    if (
      !this.nama ||
      !this.email ||
      !this.password ||
      !this.confirm_password ||
      !this.role
    ) {
      this.message = 'Semua field wajib diisi';
      return;
    }

    if (/[0-9]/.test(this.nama)) {
      this.message = 'Nama tidak boleh mengandung angka';
      return;
    }

    if (this.password.length < 8) {
      this.message = 'Password minimal 8 karakter';
      return;
    }

    if (this.password !== this.confirm_password) {
      this.message = 'Konfirmasi password tidak cocok';
      return;
    }

    this.isLoading = true;

    this.authService.register(
      this.nama,
      this.email,
      this.password,
      this.confirm_password,
      this.role
    ).subscribe(
      (res: any) => {
        this.isLoading = false;

        if (res.result == 'success') {
          alert('Register berhasil');
          this.router.navigate(['/login']);
        } else {
          this.message = res.message;
        }
      },
      error => {
        this.isLoading = false;
        this.message = 'Cannot connect to server';
      }
    );
  }
}