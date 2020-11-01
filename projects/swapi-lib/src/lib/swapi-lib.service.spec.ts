import { TestBed } from '@angular/core/testing';

import { SwapiLibService } from './swapi-lib.service';

describe('SwapiLibService', () => {
  let service: SwapiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
