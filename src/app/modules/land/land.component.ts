import { FarmerCacheService } from './../../service/farmer-cache.service';
import { SoilService } from './../../service/soil.service';
import { Soil } from './../../model/soil';
import { LandService } from './../../service/land.service';
import { Component, OnInit } from '@angular/core';
import { Land } from 'src/app/model/land';


@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  lands:Land[];
  constructor(private soilService :SoilService,private farmerCacheService:FarmerCacheService,private landService:LandService) { }

  ngOnInit(): void {
    let selectedFarmerId = localStorage.getItem("farmerId");
    
      this.getLands(Number(selectedFarmerId));

   
  }

  getLands(farmerId:number): void {
    this.landService.getLands(farmerId).subscribe(lands => this.lands = lands);
  }
}
