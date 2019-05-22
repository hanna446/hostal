import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HotelComponent } from "./pages/hotel/hotel.component";
import { HomeComponent } from "./pages/home/home.component";
import { SingleComponent } from "./pages/single/single.component";
import { DestinationComponent } from "./pages/destination/destination.component";
import { DestinationSingleComponent } from "./pages/destination-single/destination-single.component";
import { HotelSingleComponent } from "./pages/hotel-single/hotel-single.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "single", component: SingleComponent },
  { path: "home", component: HomeComponent },
  { path: "destination", component: DestinationComponent },
  { path: "destination-single", component: DestinationSingleComponent },
  { path: "hotel-single", component: HotelSingleComponent },
  { path: "hotel", component: HotelComponent },
  { path: "**", pathMatch: "full", redirectTo: "sections" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
