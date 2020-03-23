import { TestBed } from '@angular/core/testing';

import { ServiceHttpCacheService } from './service-http-cache.service';

describe('ServiceHttpCacheService', () => {
  let service: ServiceHttpCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHttpCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
