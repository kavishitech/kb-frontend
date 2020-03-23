import { SoilService } from './../../service/soil.service';
import { Soil } from './../../model/soil';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-soil-details',
  templateUrl: './soil-details.component.html',
  styleUrls: ['./soil-details.component.css']
})
export class SoilDetailsComponent implements OnInit {

  soil: Soil;
  constructor(private soilService : SoilService,private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      this.soil = new Soil();
    }
    else{
      this.getSoil(id);
    }
  }

  onSubmit(): void {
    this.soilService.save(this.soil).subscribe(soil=>this.soil=soil);

    
  }

  getSoil(id :number) : void{
     this.soilService.getSoil(id).subscribe(soil=>this.soil=soil);
  }

  newSoil() {
    this.soil = new Soil();
  }
}
