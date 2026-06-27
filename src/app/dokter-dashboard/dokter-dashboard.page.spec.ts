import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DokterDashboardPage } from './dokter-dashboard.page';

describe('DokterDashboardPage', () => {
  let component: DokterDashboardPage;
  let fixture: ComponentFixture<DokterDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DokterDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
