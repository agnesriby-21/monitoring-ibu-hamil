import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuamiDashboardPage } from './suami-dashboard.page';

describe('SuamiDashboardPage', () => {
  let component: SuamiDashboardPage;
  let fixture: ComponentFixture<SuamiDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuamiDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
