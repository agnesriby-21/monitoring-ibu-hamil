import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbuService {

  baseUrl = 'https://ubaya.cloud/hybrid/160423099/monitoring_kehamilan/';

  constructor(
    private http: HttpClient
  ) {}

  saveBiodataIbu(
    user_id: string,
    nik: string,
    tanggal_lahir: string,
    alamat: string,
    no_hp: string,
    golongan_darah: string,
    kontak_darurat: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_biodata_ibu.php',
      {
        user_id,
        nik,
        tanggal_lahir,
        alamat,
        no_hp,
        golongan_darah,
        kontak_darurat
      }
    );
  }

  getBiodataIbu(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_biodata_ibu.php?user_id=' +
      user_id
    );
  }

  saveKehamilan(
    ibu_id: string,
    hpht: string,
    usia_kehamilan: string
  ): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();

    body.set('ibu_id', ibu_id);
    body.set('hpht', hpht);
    body.set('usia_kehamilan', usia_kehamilan);

    return this.http.post<any>(
      this.baseUrl + 'save_kehamilan.php',
      body.toString(),
      { headers }
    );
  }

  getKehamilan(
    ibu_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_kehamilan.php?ibu_id=' +
      ibu_id
    );
  }

  saveMonitoring(
    kehamilan_id: string,
    tanggal_monitoring: string,
    berat_badan: string,
    tekanan_darah: string,
    denyut_jantung_janin: string,
    gerakan_janin: string,
    keluhan: string,
    catatan: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_monitoring.php',
      {
        kehamilan_id,
        tanggal_monitoring,
        berat_badan,
        tekanan_darah,
        denyut_jantung_janin,
        gerakan_janin,
        keluhan,
        catatan
      }
    );
  }

  getMonitoring(
    kehamilan_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_monitoring.php?kehamilan_id=' +
      kehamilan_id
    );
  }

  getRiwayatBooking(
    kehamilan_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_riwayat_booking.php?kehamilan_id=' +
      kehamilan_id
    );
  }

  getDokter(): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_dokter.php'
    );
  }

  saveBooking(
    kehamilan_id: string,
    dokter_id: string,
    jadwal_id: string,
    tanggal_booking: string,
    keluhan: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_booking.php',
      {
        kehamilan_id,
        dokter_id,
        jadwal_id,
        tanggal_booking,
        keluhan
      }
    );
  }

  saveReminder(
    kehamilan_id: string,
    judul: string,
    jenis_reminder: string,
    tanggal_reminder: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_reminder.php',
      {
        kehamilan_id,
        judul,
        jenis_reminder,
        tanggal_reminder
      }
    );
  }

  getReminder(
    kehamilan_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_reminder.php?kehamilan_id=' +
      kehamilan_id
    );
  }

  updateReminder(
    reminder_id: string,
    status_reminder: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'update_reminder.php',
      {
        reminder_id,
        status_reminder
      }
    );
  }

  getJadwalByDokter(
    dokter_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_jadwal_by_dokter.php?dokter_id=' +
      dokter_id
    );
  }

  getDetailPemeriksaan(
    booking_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_detail_pemeriksaan.php?booking_id=' +
      booking_id
    );
  }

  getAllEdukasi(): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_all_edukasi.php'
    );
  }

  getDetailEdukasi(
    edukasi_id: any
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_detail_edukasi.php?edukasi_id=' +
      edukasi_id
    );
  }
}