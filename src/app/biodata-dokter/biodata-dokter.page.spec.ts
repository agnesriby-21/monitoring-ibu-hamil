import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodataDokterPage } from './biodata-dokter.page';

describe('BiodataDokterPage', () => {
  let component: BiodataDokterPage;
  let fixture: ComponentFixture<BiodataDokterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataDokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
