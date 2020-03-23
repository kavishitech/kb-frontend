import { TransactionReasonService } from './../../service/transaction-reason.service';
import { UserCropService } from './../../service/usercrop.service';
import { UserCrop } from './../../model/usercrop';
import { Transaction } from './../../model/transaction';
import { CropService } from './../../service/crop.service';
import { Crop } from './../../model/crop';
import { TransactionService } from './../../service/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { LandService } from './../../service/land.service';
import { Land } from './../../model/land';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TransactionReason } from 'src/app/model/transaction-reason';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  
  transaction: Transaction;
  expenseType:number;
  transactionReasons: TransactionReason[];

  
  constructor(private transactionService :TransactionService,private transactionReasonService: TransactionReasonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.expenseType = 0;
    let id = Number(this.route.snapshot.paramMap.get('id'));
    let cropId = Number(this.route.snapshot.paramMap.get('cropId'));
    let landId = Number(this.route.snapshot.paramMap.get('landId'));
    

    if(id ==0){   
      let farmerId=Number(localStorage.getItem("farmerId"))
   
      this.transaction = new Transaction();
      this.transaction.farmerId=farmerId;
      this.transactionReasonService.getTransactionReasons().subscribe(transactionReasons=>this.transactionReasons=transactionReasons);
    }
    else{
      this.getTransaction(id);
    }
    if(cropId != 0){
      this.expenseType=2;
      this.transaction.userCropId =cropId;
    }
    if(landId != 0){
      this.expenseType=3;
      this.transaction.landId =landId;
    }
    
  }

  onSubmit(): void {
    this.transactionService.save(this.transaction).subscribe(transaction=>this.transaction=transaction);

    
  }
  getTransaction(id: number) {
    this.transactionService.getTransaction(id).subscribe(transaction=>this.transaction=transaction);

  }


}
