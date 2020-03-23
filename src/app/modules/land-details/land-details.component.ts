import { Land } from './../../model/land';
import { Soil } from './../../model/soil';
import { SoilService } from './../../service/soil.service';
import { LandService } from './../../service/land.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit {

  soils: Soil[];
  land: Land;
  constructor(private soilService :SoilService,private landService :LandService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      
      this.land = new Land();
      this.land.farmerId=Number(localStorage.getItem("farmerId"));
    }
    else{
      this.getLand(id);
    }
    this.soilService.getSoils().subscribe(soils=>this.soils=soils);
  }

  onSubmit(): void {
    this.landService.save(this.land).subscribe(land=>this.land=land);

    
  }
  getLand(id: number) {
    this.landService.getLand(id).subscribe(land=>this.land=land);

  }

}
