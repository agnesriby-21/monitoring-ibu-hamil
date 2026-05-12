import { TestBed } from '@angular/core/testing';

import { Edukasi } from './edukasi';

describe('Edukasi', () => {
  let service: Edukasi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Edukasi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
