import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuamiService {

  baseUrl =
    'https://ubaya.cloud/hybrid/160423099/monitoring_kehamilan/';

  constructor(
    private http: HttpClient
  ) {}

  hubungkanIstri(
    user_id: string,
    kode_pasangan: string
  ): Observable<any> {

    const headers = {
      'Content-Type': 'application/json'
    };

    return this.http.post<any>(
      this.baseUrl + 'hubungkan_istri.php',
      {
        user_id: parseInt(user_id),
        kode_pasangan: kode_pasangan
      },
      { headers }
    );
  }

  getDataIstri(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_data_istri.php?user_id=' +
      user_id
    );
  }

  getBookingIstri(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_booking_istri.php?user_id=' +
      user_id
    );
  }

  saveReminder(
    data: any
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_reminder.php',
      data
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

  getMonitoringIstri(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_monitoring_istri.php?user_id=' +
      user_id
    );
  }

  getPemeriksaanIstri(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_pemeriksaan_istri.php?user_id=' +
      user_id
    );
  }

  getProfileSuami(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_profile_suami.php?user_id=' +
      user_id
    );
  }

  saveBiodataSuami(
    user_id: string,
    nik: string,
    tanggal_lahir: string,
    alamat: string,
    no_hp: string,
    pekerjaan: string
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_biodata_suami.php',
      {
        user_id: user_id,
        nik: nik,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat,
        no_hp: no_hp,
        pekerjaan: pekerjaan
      }
    );
  }

  getBiodataSuami(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_biodata_suami.php?user_id=' +
      user_id
    );
  }

  saveChecklistSuami(
    data: any
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'save_checklist_suami.php',
      data
    );
  }

  getChecklistSuami(
    user_id: string
  ): Observable<any> {

    return this.http.get<any>(
      this.baseUrl +
      'get_checklist_suami.php?user_id=' +
      user_id
    );
  }

  deleteChecklistSuami(
    checklist_id: number
  ): Observable<any> {

    return this.http.post<any>(
      this.baseUrl + 'delete_checklist_suami.php',
      {
        checklist_id
      }
    );
  }
}