import { UserCrop } from './../../model/usercrop';
import { CropService } from './../../service/crop.service';
import { Crop } from './../../model/crop';
import { UserCropService } from './../../service/usercrop.service';
import { ActivatedRoute } from '@angular/router';
import { LandService } from './../../service/land.service';
import { Land } from './../../model/land';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-usercrop-detail',
  templateUrl: './usercrop-detail.component.html',
  styleUrls: ['./usercrop-detail.component.css']
})
export class UsercropDetailComponent implements OnInit {

  
  lands: Land[];
  crops: Crop[];
  userCrop: UserCrop;

  
  constructor(private userCropService :UserCropService, private landService :LandService,
    private cropService :CropService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){      
      this.userCrop = new UserCrop();
      this.userCrop.farmerId=Number(localStorage.getItem("farmerId"));
    }
    else{
      this.getUserCrop(id);

    }
    if(!this.lands){
    this.landService.getLands(Number(localStorage.getItem("farmerId"))).subscribe(lands=>this.lands=lands);
  }
    this.cropService.getCrops().subscribe(crops=>this.crops=crops);
    
  }

  onSubmit(): void {
    this.userCropService.save(this.userCrop).subscribe(userCrop=>this.userCrop=userCrop);

    
  }
  
  getUserCrop(id: number) {
    this.userCropService.getUserCrop(id).subscribe(userCrop=>this.userCrop=userCrop);
    
  }


}
