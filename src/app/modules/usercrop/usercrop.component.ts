import { CropService } from './../../service/crop.service';
import { map } from 'rxjs/operators';
import { Land } from './../../model/land';
import { LandService } from './../../service/land.service';
import { Crop } from './../../model/crop';
import { UserCropService } from './../../service/usercrop.service';
import { UserCrop } from './../../model/usercrop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercrop',
  templateUrl: './usercrop.component.html',
  styleUrls: ['./usercrop.component.css']
})
export class UsercropComponent implements OnInit {


  landmap: {[key: number]: string};
  cropmap: {[key: number]: string};
  userCrops: UserCrop[];
  constructor(private userCropService: UserCropService, private landService: LandService,
    private cropService: CropService) { }

  ngOnInit(): void {
    let selectedFarmerId = localStorage.getItem("farmerId");

    this.getUserCrops(Number(selectedFarmerId));

    if (!this.landmap) {
      this.landService.getLands(Number(localStorage.getItem("farmerId"))).subscribe(lands =>this.landmap = lands.reduce(function (map, obj) {
            map[obj.id] = obj.name;
            (map[obj.id]);
            return map;
          }, {}));

      };

      if (!this.landmap) {
        this.cropService.getCrops().subscribe(crops =>this.cropmap = crops.reduce(function (map, obj) {
              map[obj.id] = obj.name;
              return map;
            }, {}));
  
        };


  }

  


  getUserCrops(farmerId: number): void {
    this.userCropService.getUserCrops(farmerId).subscribe(userCrops => this.userCrops = userCrops);
  }
}
