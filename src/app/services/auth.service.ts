import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl =
    'https://ubaya.cloud/hybrid/160423099/monitoring_kehamilan/';

  constructor(
    private http: HttpClient
  ) {}

  login(
    email: string,
    password: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();

    body.set('email', email);
    body.set('password', password);

    return this.http.post<any>(
      this.baseUrl + 'login.php',
      body.toString(),
      { headers }
    );
  }

  register(
    nama: string,
    email: string,
    password: string,
    confirm_password: string,
    role: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();

    body.set('nama', nama);
    body.set('email', email);
    body.set('password', password);
    body.set('confirm_password', confirm_password);
    body.set('role', role);

    return this.http.post<any>(
      this.baseUrl + 'register.php',
      body.toString(),
      { headers }
    );
  }
}