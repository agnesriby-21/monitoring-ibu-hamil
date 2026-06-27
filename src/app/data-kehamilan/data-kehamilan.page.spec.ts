import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataKehamilanPage } from './data-kehamilan.page';

describe('DataKehamilanPage', () => {
  let component: DataKehamilanPage;
  let fixture: ComponentFixture<DataKehamilanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataKehamilanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
