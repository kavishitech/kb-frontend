import { Injectable } from '@angular/core';  
import { HttpResponse } from '@angular/common/http';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class HttpCacheService {  
  
  private requests: any = { };  
  
  constructor() { }  
  
  put(url: string, response: HttpResponse<any>): void {  
    this.requests[url] = response;
    console.log("Putting Data",url,"Re",this.requests)
  
  }  
  
  get(url: string): HttpResponse<any> | undefined {  
    console.log("Getting Data",url,"Re",this.requests)

    return this.requests[url];  
  }  
  
  invalidateCache(): void {  
    console.log("invalidateCache")

    this.requests = { };  
  }  
}  