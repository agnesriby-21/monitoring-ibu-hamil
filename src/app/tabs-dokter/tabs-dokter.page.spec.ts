import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsDokterPage } from './tabs-dokter.page';

describe('TabsDokterPage', () => {
  let component: TabsDokterPage;
  let fixture: ComponentFixture<TabsDokterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
