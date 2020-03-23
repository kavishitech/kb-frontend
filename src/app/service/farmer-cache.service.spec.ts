import { TestBed } from '@angular/core/testing';

import { FarmerCacheService } from './farmer-cache.service';

describe('FarmerCacheService', () => {
  let service: FarmerCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
