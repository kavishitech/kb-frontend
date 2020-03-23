import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Soil } from './../model/soil';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SoilService {
  private soilServiceURL = 'http://localhost:9000/soil';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

    save(soil:Soil) : Observable<Soil>{
      if(soil.id > 0){
        return this.http.put<Soil>(this.soilServiceURL,soil,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
      }
      return this.http.post<Soil>(this.soilServiceURL,soil,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
    }


  getSoil(id: number) : Observable<Soil> {
    return this.http.get<Soil>(this.soilServiceURL+"/"+id)
    .pipe(
      tap(_ => this.log('fetched Soils')),
      catchError(this.handleError)
    );  }

    getSoils() : Observable<Soil[]>{
      return this.http.get<Soil[]>(this.soilServiceURL)
        .pipe(
          tap(_ => this.log('fetched Soils')),
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
