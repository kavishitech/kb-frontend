import { LandService } from './land.service';
import { Land } from './../model/land';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerCacheService {
  

  static lands : Land[];

  

  constructor(private landService:LandService) { 
    console.log("FarmerCacheService", FarmerCacheService.lands);
    if(!FarmerCacheService.lands){
    this.landService.getLands(9).subscribe(lands=>FarmerCacheService.lands=lands);
    }

  }

  static getLands(farmerId:number){
      return this.lands;
  }

  

  
}
