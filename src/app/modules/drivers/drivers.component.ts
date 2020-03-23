import { Driver } from './../../model/driver';
import { DriverService } from './../../service/driver.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers : Driver[];
  selectedDriver : Driver;
  constructor(private DriverService : DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }

  onSelect(driver: Driver):void{
    this.selectedDriver=driver;
  }

  getDrivers() : void{
    this.DriverService.getDrivers().subscribe(drivers=>this.drivers=drivers);
  }
}
