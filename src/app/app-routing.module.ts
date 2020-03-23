import { TransactionReasonDetailComponent } from './modules/transaction-reason-detail/transaction-reason-detail.component';
import { TransactionReasonComponent } from './modules/transaction-reason/transaction-reason.component';
import { TransactionDetailComponent } from './modules/transaction-detail/transaction-detail.component';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { UsercropDetailComponent } from './modules/usercrop-detail/usercrop-detail.component';
import { UsercropComponent } from './modules/usercrop/usercrop.component';
import { FarmerDetailComponent } from './modules/farmer-detail/farmer-detail.component';
import { DriversComponent } from './modules/drivers/drivers.component';
import { DriverDetailComponent } from './modules/driver-detail/driver-detail.component';
import { LandDetailsComponent } from './modules/land-details/land-details.component';
import { SoilDetailsComponent } from './modules/soil-details/soil-details.component';
import { CropDetailsComponent } from './modules/crop-details/crop-details.component';
import { FarmersComponent } from './modules/farmers/farmers.component';
import { LandComponent } from './modules/land/land.component';
import { CropComponent } from './modules/crop/crop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoilComponent } from './modules/soil/soil.component';

export const routes: Routes = [
  {path: '',redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'drivers',component:DriversComponent},
  {path: 'detail/:id',component:DriverDetailComponent},
  {path: 'farmers',component:FarmersComponent},
  {path: 'farmer/:id',component:FarmerDetailComponent},
  {path: 'lands',component:LandComponent},
  {path: 'land/:id',component:LandDetailsComponent},
  {path: 'crops',component:CropComponent},
  {path: 'crop/:id',component:CropDetailsComponent},
  {path: 'soils',component:SoilComponent},
  {path: 'soil/:id',component:SoilDetailsComponent},
  {path: 'userCrops',component:UsercropComponent},
  {path: 'userCrop/:id',component:UsercropDetailComponent},
  {path: 'transactions',component:TransactionComponent},
  {path: 'transaction/:id',component:TransactionDetailComponent},
  {path: 'transaction/crop/:cropId',component:TransactionDetailComponent},
  {path: 'transaction/land/:landId',component:TransactionDetailComponent},
  {path: 'transactionReasons',component:TransactionReasonComponent},
  {path: 'transactionReason/:id',component:TransactionReasonDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
