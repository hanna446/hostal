import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { AboutComponent } from "./about/about.component";
import { DestinationComponent } from "./destination/destination.component";
import { DestinationSingleComponent } from "./destination-single/destination-single.component";
import { HomeComponent } from "./home/home.component";
import { HotelComponent } from "./hotel/hotel.component";
import { HotelSingleComponent } from './hotel-single/hotel-single.component';
import { SingleComponent } from './single/single.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    DestinationComponent,
    DestinationSingleComponent,
    HomeComponent,
    HotelComponent,
    HotelSingleComponent,
    SingleComponent,
  ],

  exports: [],

  imports: [CommonModule, AppRoutingModule, SharedModule]
})
export class PageModule { }
