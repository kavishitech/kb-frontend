import { LandService } from './../../service/land.service';
import { Cache } from './../../cache';
import { FarmerCacheService } from './../../service/farmer-cache.service';
import { Farmer } from './../../model/farmer';
import { FarmerService } from './../../service/farmer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-farmer-detail',
  templateUrl: './farmer-detail.component.html',
  styleUrls: ['./farmer-detail.component.css']
})
export class FarmerDetailComponent implements OnInit {

  farmer: Farmer;
  submitted = false;

  constructor(private farmerService : FarmerService,private landService: LandService,private farmerCacheService : FarmerCacheService,private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      this.farmer = new Farmer();
    }
    else{
      this.getFarmer(id);
      localStorage.setItem("farmerId",id.toString());
         this.landService.getLands(id).subscribe(lands=>Cache.lands=lands);

    }
  }

  onSubmit(): void {
    this.submitted = true;
    ("In Submit Method")
    this.farmerService.save(this.farmer).subscribe(farmer=>this.farmer=farmer);

    
  }

  getFarmer(id :number) : void{
     this.farmerService.getFarmer(id).subscribe(farmer=>this.farmer=farmer);
  }

  newFarmer() {
    this.farmer = new Farmer();
  }
}
