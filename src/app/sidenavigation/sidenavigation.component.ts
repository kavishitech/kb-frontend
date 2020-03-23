import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  farmerId:number;
  constructor() { }

  ngOnInit(): void {

    let selectedFarmerId = localStorage.getItem("farmerId");
    if(selectedFarmerId != null){
      this.farmerId=Number(selectedFarmerId);
    }
    
  }

}
