import { Cache } from './cache';
import { TrasactionReasonPipeName } from './utils/pipes/trasaction-reason-pipe-name';
import { TrasactionReasonPipe } from './utils/pipes/trasaction-reason-pipe';
import { RouterModule } from '@angular/router';
import { CacheInterceptor } from './handler/cache-interceptor';
import { DriversComponent } from './modules/drivers/drivers.component';
import { LandDetailsComponent } from './modules/land-details/land-details.component';
import { FarmerDetailComponent } from './modules/farmer-detail/farmer-detail.component';
import { DriverDetailComponent } from './modules/driver-detail/driver-detail.component';
import { SoilDetailsComponent } from './modules/soil-details/soil-details.component';
import { LandComponent } from './modules/land/land.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { FarmersComponent } from './modules/farmers/farmers.component';
import { SoilDirective } from './soil.directive';
import { CropComponent } from './modules/crop/crop.component';
import { SoilComponent } from './modules/soil/soil.component';
import { CropDetailsComponent } from './modules/crop-details/crop-details.component';
import { UsercropComponent } from './modules/usercrop/usercrop.component';
import { UsercropDetailComponent } from './modules/usercrop-detail/usercrop-detail.component';
import { routes } from './app-routing.module';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { TransactionDetailComponent } from './modules/transaction-detail/transaction-detail.component';
import { TransactionReasonComponent } from './modules/transaction-reason/transaction-reason.component';
import { TransactionReasonDetailComponent } from './modules/transaction-reason-detail/transaction-reason-detail.component';  
import { TransactionTypeFilterPipe } from './utils/pipes/transaction-type-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    DriverDetailComponent,
    MessagesComponent,
    SidenavigationComponent,
    FarmersComponent,
    FarmerDetailComponent,
    SoilDirective,
    LandComponent,
    LandDetailsComponent,
    CropComponent,
    SoilComponent,
    SoilDetailsComponent,
    CropDetailsComponent,
    UsercropComponent,
    UsercropDetailComponent,
    TransactionComponent,
    TransactionDetailComponent,
    TransactionReasonComponent,
    TransactionReasonDetailComponent,
    TrasactionReasonPipe,
    TrasactionReasonPipeName,
    TransactionTypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [  Cache,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }  
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
