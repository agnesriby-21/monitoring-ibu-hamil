import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoringSuamiPage } from './monitoring-suami.page';

describe('MonitoringSuamiPage', () => {
  let component: MonitoringSuamiPage;
  let fixture: ComponentFixture<MonitoringSuamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringSuamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
