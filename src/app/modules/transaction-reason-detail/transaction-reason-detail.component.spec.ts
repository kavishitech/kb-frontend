import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReasonDetailComponent } from './transaction-reason-detail.component';

describe('TransactionReasonDetailComponent', () => {
  let component: TransactionReasonDetailComponent;
  let fixture: ComponentFixture<TransactionReasonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionReasonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
