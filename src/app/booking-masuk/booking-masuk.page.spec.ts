import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingMasukPage } from './booking-masuk.page';

describe('BookingMasukPage', () => {
  let component: BookingMasukPage;
  let fixture: ComponentFixture<BookingMasukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMasukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
