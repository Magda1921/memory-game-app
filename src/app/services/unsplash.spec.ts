import { TestBed } from '@angular/core/testing';

import { Unsplash } from './unsplash';

describe('Unsplash', () => {
  let service: Unsplash;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Unsplash);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
