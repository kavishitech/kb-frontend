import { ActivatedRoute } from '@angular/router';
import { TransactionReasonService } from './../../service/transaction-reason.service';
import { TransactionReason } from './../../model/transaction-reason';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-reason-detail',
  templateUrl: './transaction-reason-detail.component.html',
  styleUrls: ['./transaction-reason-detail.component.css']
})

export class TransactionReasonDetailComponent implements OnInit {

  transactionReason: TransactionReason;
  constructor(private transactionReasonService :TransactionReasonService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      this.transactionReason = new TransactionReason();
    }
    else{
      this.getTransactionReason(id);
    }
  }

  onSubmit(): void {
    this.transactionReasonService.save(this.transactionReason).subscribe(transactionReason=>this.transactionReason=transactionReason);

    
  }
  getTransactionReason(id: number) {
    this.transactionReasonService.getTransactionReason(id).subscribe(transactionReason=>this.transactionReason=transactionReason);

  }

}

