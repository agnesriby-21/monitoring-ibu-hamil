import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEdukasiPage } from './detail-edukasi.page';

describe('DetailEdukasiPage', () => {
  let component: DetailEdukasiPage;
  let fixture: ComponentFixture<DetailEdukasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEdukasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
