import { UserCrop } from './../model/usercrop';
import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserCropService {
  private userCropByFarmerServiceURL = 'http://localhost:9000/userCrops';
  private userCropServiceURL = 'http://localhost:9000/userCrop';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(    private http: HttpClient,
    private messagesService: MessagesService) { }

    save(userCrop:UserCrop) : Observable<UserCrop>{
      if(userCrop.id > 0){
        return this.http.put<UserCrop>(this.userCropServiceURL,userCrop,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
      }
      return this.http.post<UserCrop>(this.userCropServiceURL,userCrop,this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
      
    }


  getUserCrop(id: number) : Observable<UserCrop> {
    return this.http.get<UserCrop>(this.userCropServiceURL+"/"+id)
    .pipe(
      tap(_ => this.log('fetched UserCrops')),
      catchError(this.handleError)
    );  }

    getUserCrops(farmerId:number) : Observable<UserCrop[]>{
      
      return this.http.get<UserCrop[]>(this.userCropByFarmerServiceURL+"/"+farmerId)
        .pipe(
          tap(_ => this.log('fetched UserCrops')),
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
