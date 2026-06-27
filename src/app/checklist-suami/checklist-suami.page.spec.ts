import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistSuamiPage } from './checklist-suami.page';

describe('ChecklistSuamiPage', () => {
  let component: ChecklistSuamiPage;
  let fixture: ComponentFixture<ChecklistSuamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistSuamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
