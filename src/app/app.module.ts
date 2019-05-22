import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationSingleComponent } from './pages/destination-single/destination-single.component';
import { SingleComponent } from './pages/single/single.component';
import { HotelSingleComponent } from './pages/hotel-single/hotel-single.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    HotelComponent,
    DestinationComponent,
    DestinationSingleComponent,
    SingleComponent,
    HotelSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
