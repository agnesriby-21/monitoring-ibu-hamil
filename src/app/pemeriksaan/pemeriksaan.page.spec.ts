import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PemeriksaanPage } from './pemeriksaan.page';

describe('PemeriksaanPage', () => {
  let component: PemeriksaanPage;
  let fixture: ComponentFixture<PemeriksaanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PemeriksaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
