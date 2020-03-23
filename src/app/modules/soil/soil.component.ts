import { SoilService } from './../../service/soil.service';
import { Component, OnInit } from '@angular/core';
import { Soil } from 'src/app/model/soil';


@Component({
  selector: 'app-soil',
  templateUrl: './soil.component.html',
  styleUrls: ['./soil.component.css']
})
export class SoilComponent implements OnInit {

  public soils: Soil[];
  constructor(private soilService :SoilService) { }

  ngOnInit(): void {
    this.getSoils();
  }

  getSoils(): void {
      this.soilService.getSoils().subscribe(soils => this.soils = soils);
  }
}
