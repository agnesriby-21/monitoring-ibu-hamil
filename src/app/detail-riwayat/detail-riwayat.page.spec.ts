import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailRiwayatPage } from './detail-riwayat.page';

describe('DetailRiwayatPage', () => {
  let component: DetailRiwayatPage;
  let fixture: ComponentFixture<DetailRiwayatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRiwayatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
