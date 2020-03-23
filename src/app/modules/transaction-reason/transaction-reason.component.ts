import { TransactionReason } from './../../model/transaction-reason';
import { TransactionReasonService } from './../../service/transaction-reason.service';
import { SoilService } from './../../service/soil.service';
import { Soil } from './../../model/soil';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction-reason',
  templateUrl: './transaction-reason.component.html',
  styleUrls: ['./transaction-reason.component.css']
})
export class TransactionReasonComponent implements OnInit {

  transactionReasons:TransactionReason[];
  constructor(private transactionReasonService:TransactionReasonService) { }

  ngOnInit(): void {
    this.getTransactionReasons();
  }

  getTransactionReasons(): void {
    this.transactionReasonService.getTransactionReasons().subscribe(transactionReasons => this.transactionReasons = transactionReasons);
  }
}
