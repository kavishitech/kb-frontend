import { TransactionReason } from './../model/transaction-reason';
import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionReasonService {
  private transactionReasonServiceURL = 'http://localhost:9000/transactionReason';

  transactionReasons:TransactionReason[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

    save(transactionReason:TransactionReason) : Observable<TransactionReason>{
      if(transactionReason.id > 0){
        return this.http.put<TransactionReason>(this.transactionReasonServiceURL,transactionReason,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
      }
      return this.http.post<TransactionReason>(this.transactionReasonServiceURL,transactionReason,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
    }


  getTransactionReason(id: number) : Observable<TransactionReason> {
    return this.http.get<TransactionReason>(this.transactionReasonServiceURL+"/"+id)
    .pipe(
      tap(_ => this.log('fetched TransactionReasons')),
      catchError(this.handleError)
    );  }
    

    getTransactionReasons() : Observable<TransactionReason[]>{
      return this.http.get<TransactionReason[]>(this.transactionReasonServiceURL)
        .pipe(
          tap(_ => this.log('fetched TransactionReasons')),
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
