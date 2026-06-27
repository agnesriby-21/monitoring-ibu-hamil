import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodataIbuPage } from './biodata-ibu.page';

describe('BiodataIbuPage', () => {
  let component: BiodataIbuPage;
  let fixture: ComponentFixture<BiodataIbuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataIbuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
