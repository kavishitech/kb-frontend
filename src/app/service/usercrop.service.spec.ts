import { TestBed } from '@angular/core/testing';

import { UsercropService } from './usercrop.service';

describe('UsercropService', () => {
  let service: UsercropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
