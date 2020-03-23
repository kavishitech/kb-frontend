import { TestBed } from '@angular/core/testing';

import { TransactionReasonService } from './transaction-reason.service';

describe('TransactionReasonService', () => {
  let service: TransactionReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
