import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoringKehamilanPage } from './monitoring-kehamilan.page';

describe('MonitoringKehamilanPage', () => {
  let component: MonitoringKehamilanPage;
  let fixture: ComponentFixture<MonitoringKehamilanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringKehamilanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
