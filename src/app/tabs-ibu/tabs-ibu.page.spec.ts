import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsIbuPage } from './tabs-ibu.page';

describe('TabsIbuPage', () => {
  let component: TabsIbuPage;
  let fixture: ComponentFixture<TabsIbuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsIbuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
