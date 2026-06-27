import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodataSuamiPage } from './biodata-suami.page';

describe('BiodataSuamiPage', () => {
  let component: BiodataSuamiPage;
  let fixture: ComponentFixture<BiodataSuamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataSuamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
