import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdukasiDokterPage } from './edukasi-dokter.page';

describe('EdukasiDokterPage', () => {
  let component: EdukasiDokterPage;
  let fixture: ComponentFixture<EdukasiDokterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EdukasiDokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
