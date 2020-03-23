import { MessagesService } from './messages.service';
import { Farmer } from './../model/farmer';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private farmerServiceURL = 'http://localhost:9000/farmer';  // URL to web api


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

  getFarmers() : Observable<Farmer[]>{
    return this.http.get<Farmer[]>(this.farmerServiceURL)
      .pipe(
        tap(_ => this.log('fetched Farmers')),
        catchError(this.handleError)
      );
       }

  save(farmer:Farmer) : Observable<Farmer>{
    if(farmer.id > 0){
      return this.http.put<Farmer>(this.farmerServiceURL,farmer,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    
    }
    return this.http.post<Farmer>(this.farmerServiceURL,farmer,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    
  }

  getFarmer(id:number) : Observable<Farmer>{
    return this.http.get<Farmer>(this.farmerServiceURL+"/"+id)
      .pipe(
        tap(_ => this.log('fetched Farmers')),
        catchError(this.handleError)
      );
  }
  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   console.log(result);
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
