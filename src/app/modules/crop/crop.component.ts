import { SoilService } from './../../service/soil.service';
import { Soil } from './../../model/soil';
import { CropService } from './../../service/crop.service';
import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/model/crop';


@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {

  crops:Crop[];
  constructor(private cropService:CropService) { }

  ngOnInit(): void {
    this.getCrops();
  }

  getCrops(): void {
    this.cropService.getCrops().subscribe(crops => this.crops = crops);
  }
}
