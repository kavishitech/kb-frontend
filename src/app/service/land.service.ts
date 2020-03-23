import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Land } from './../model/land';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LandService {
  private landServiceURL = 'http://localhost:9000/land';

  static lands : Observable<Land[]>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

    save(land:Land) : Observable<Land>{
      if(land.id > 0){
        return this.http.put<Land>(this.landServiceURL,land,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
      }
      return this.http.post<Land>(this.landServiceURL,land,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
    }


  getLand(id: number) : Observable<Land> {
    return this.http.get<Land>(this.landServiceURL+"/"+id)
    .pipe(
      tap(_ => this.log('fetched Lands')),
      catchError(this.handleError)
    );  }

    getLands(farmerId:number) : Observable<Land[]>{
      
      LandService.lands = this.http.get<Land[]>(this.landServiceURL+"/"+farmerId)
        .pipe(
          tap(_ => this.log('fetched Lands')),
          catchError(this.handleError)
        );

        return LandService.lands;
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
