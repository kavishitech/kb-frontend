import { FarmerService } from './../../service/farmer.service';
import { Farmer } from './../../model/farmer';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  farmers: Farmer[];
  selectedFarmer: Farmer;
  constructor(private FarmerService: FarmerService) { }

  ngOnInit(): void {
    this.getFarmers();
  }

  onSelect(farmer: Farmer): void {
    this.selectedFarmer = farmer;
  }

  getFarmers(): void {
    this.FarmerService.getFarmers().subscribe(farmers => this.farmers = farmers);
  }
}
