import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahEdukasiPage } from './tambah-edukasi.page';

describe('TambahEdukasiPage', () => {
  let component: TambahEdukasiPage;
  let fixture: ComponentFixture<TambahEdukasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahEdukasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
