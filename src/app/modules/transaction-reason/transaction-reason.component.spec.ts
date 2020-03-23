import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReasonComponent } from './transaction-reason.component';

describe('TransactionReasonComponent', () => {
  let component: TransactionReasonComponent;
  let fixture: ComponentFixture<TransactionReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
