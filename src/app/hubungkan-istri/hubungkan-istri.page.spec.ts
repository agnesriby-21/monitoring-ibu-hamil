import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HubungkanIstriPage } from './hubungkan-istri.page';

describe('HubungkanIstriPage', () => {
  let component: HubungkanIstriPage;
  let fixture: ComponentFixture<HubungkanIstriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HubungkanIstriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
