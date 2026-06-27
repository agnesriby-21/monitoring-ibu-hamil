import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsSuamiPage } from './tabs-suami.page';

describe('TabsSuamiPage', () => {
  let component: TabsSuamiPage;
  let fixture: ComponentFixture<TabsSuamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSuamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
