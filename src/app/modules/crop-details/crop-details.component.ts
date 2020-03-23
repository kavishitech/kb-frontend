import { Crop } from './../../model/crop';
import { CropService } from './../../service/crop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  crop: Crop;
  constructor(private cropService :CropService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      this.crop = new Crop();
    }
    else{
      this.getCrop(id);
    }
  }

  onSubmit(): void {
    this.cropService.save(this.crop).subscribe(crop=>this.crop=crop);

    
  }
  getCrop(id: number) {
    this.cropService.getCrop(id).subscribe(crop=>this.crop=crop);

  }

}
