import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadwalDokterPage } from './jadwal-dokter.page';

describe('JadwalDokterPage', () => {
  let component: JadwalDokterPage;
  let fixture: ComponentFixture<JadwalDokterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalDokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
