import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DokterService {
  baseUrl =
    'https://ubaya.cloud/hybrid/160423099/monitoring_kehamilan/';

  constructor(
    private http: HttpClient
  ) {}

  saveBiodataDokter(
    user_id: string,
    spesialisasi: string,
    no_hp: string,
    no_str: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_biodata_dokter.php',
      {
        user_id,
        spesialisasi,
        no_hp,
        no_str
      }
    );
  }

  getBiodataDokter(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_biodata_dokter.php?user_id=' +
      user_id
    );
  }

  saveJadwal(
    dokter_id: string,
    hari: string,
    jam_mulai: string,
    jam_selesai: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_jadwal.php',
      {
        dokter_id,
        hari,
        jam_mulai,
        jam_selesai
      }
    );
  }

  getJadwalDokter(
    dokter_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_jadwal_dokter.php?dokter_id=' +
      dokter_id
    );
  }

  getDokterByUser(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_dokter_by_user.php?user_id=' +
      user_id
    );
  }

  getBookingMasuk(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_booking_masuk.php?user_id=' +
      user_id
    );
  }

  updateStatusBooking(
    booking_id: string,
    status_booking: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'update_status_booking.php',
      {
        booking_id,
        status_booking
      }
    );
  }

  savePemeriksaan(
    data: any
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_pemeriksaan.php',
      data
    );
  }

  selesaiBooking(
    booking_id: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'selesai_booking.php',
      {
        booking_id
      }
    );
  }

  getBookingDetail(
    booking_id: any
  ) {

    return this.http.get(
      this.baseUrl +
      'get_booking_detail.php?booking_id=' +
      booking_id
    );
  }

  getDashboardDokter(
    dokter_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_dashboard_dokter.php?dokter_id=' +
      dokter_id
    );
  }

  saveEdukasi(
    data: any
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_edukasi.php',
      data
    );
  }

  getEdukasiDokter(
    dokter_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_edukasi_dokter.php?dokter_id=' +
      dokter_id
    );
  }

  deleteJadwal(
    jadwal_id: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'delete_jadwal.php',
      { jadwal_id }
    );
  }

  deleteEdukasi(
    edukasi_id: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'delete_edukasi.php',
      { edukasi_id }
    );
  }
}