import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PemeriksaanSuamiPage } from './pemeriksaan-suami.page';

describe('PemeriksaanSuamiPage', () => {
  let component: PemeriksaanSuamiPage;
  let fixture: ComponentFixture<PemeriksaanSuamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PemeriksaanSuamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
