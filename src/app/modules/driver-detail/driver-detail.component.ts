import { DriverService } from './../../service/driver.service';
import { Driver } from './../../model/driver';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  driver: Driver;
  submitted = false;

  constructor(private DriverService : DriverService,private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id ==0){
      this.driver = new Driver();
    }
    else{
      this.getDriver(id);
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.DriverService.save(this.driver).subscribe(driver=>this.driver=driver);

    
  }

  getDriver(id :number) : void{
     this.DriverService.getDriver(id).subscribe(driver=>this.driver=driver);
  }

  newDriver() {
    this.driver = new Driver();
  }
}
