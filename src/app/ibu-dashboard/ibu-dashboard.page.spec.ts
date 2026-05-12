import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IbuDashboardPage } from './ibu-dashboard.page';

describe('IbuDashboardPage', () => {
  let component: IbuDashboardPage;
  let fixture: ComponentFixture<IbuDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
