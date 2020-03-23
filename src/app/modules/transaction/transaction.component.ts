import { TransactionReasonService } from './../../service/transaction-reason.service';
import { CropService } from './../../service/crop.service';
import { map } from 'rxjs/operators';
import { Land } from './../../model/land';
import { LandService } from './../../service/land.service';
import { Crop } from './../../model/crop';
import { TransactionService } from './../../service/transaction.service';
import { Transaction } from './../../model/transaction';
import { Component, OnInit } from '@angular/core';
import { TransactionReason } from 'src/app/model/transaction-reason';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionReasons: TransactionReason[];



  landmap: { [key: number]: string };
  cropmap: { [key: number]: string };
  transactions: Transaction[];
  transactionType: number;

  constructor(private transactionService: TransactionService, private transactionReasonService: TransactionReasonService,
    private landService: LandService,
    private cropService: CropService) { }

  ngOnInit(): void {
    let selectedFarmerId = localStorage.getItem("farmerId");
    this.transactionType = 0;
    this.getTransactions(Number(selectedFarmerId));
    this.transactionReasonService.getTransactionReasons().subscribe(transactionReasons => this.transactionReasons = transactionReasons);

    if (!this.landmap) {
      this.landService.getLands(Number(localStorage.getItem("farmerId"))).subscribe(lands => this.landmap = lands.reduce(function (map, obj) {
        map[obj.id] = obj.name;
        return map;
      }, {}));

    };

    if (!this.landmap) {
      this.cropService.getCrops().subscribe(crops => this.cropmap = crops.reduce(function (map, obj) {
        map[obj.id] = obj.name;
        return map;
      }, {}));

    };


  }

  filterBy(type: number) {
    console.log("CLICKING")
    this.transactionType = type;
  }


  getTransactions(farmerId: number): void {
    this.transactionService.getTransactions(farmerId).subscribe(transactions => this.transactions = transactions);
  }
}
