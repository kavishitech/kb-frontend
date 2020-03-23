import { Transaction } from './../model/transaction';
import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionByFarmerServiceURL = 'http://localhost:9000/transactions';
  private transactionServiceURL = 'http://localhost:9000/transaction';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

    save(transaction:Transaction) : Observable<Transaction>{
      if(transaction.id > 0){
        return this.http.put<Transaction>(this.transactionServiceURL,transaction,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
      }
      return this.http.post<Transaction>(this.transactionServiceURL,transaction,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
    }


  getTransaction(id: number) : Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionServiceURL+"/"+id)
    .pipe(
      tap(_ => this.log('fetched Transactions')),
      catchError(this.handleError)
    );  }

    getTransactions(farmerId:number) : Observable<Transaction[]>{
      
      return this.http.get<Transaction[]>(this.transactionByFarmerServiceURL+"/"+farmerId)
        .pipe(
          tap(_ => this.log('fetched Transactions')),
          catchError(this.handleError)
        );
         }
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
  
    private log(message: string) {
      console.log(message);
    }
  
}
