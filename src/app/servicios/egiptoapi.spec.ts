import { TestBed } from '@angular/core/testing';

import { Egiptoapi } from './egiptoapi';

describe('Egiptoapi', () => {
  let service: Egiptoapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Egiptoapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
