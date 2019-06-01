import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HotelComponent } from "./pages/hotel/hotel.component";
import { HomeComponent } from "./pages/home/home.component";
import { SingleComponent } from "./pages/single/single.component";
import { DestinationComponent } from "./pages/destination/destination.component";
import { DestinationSingleComponent } from "./pages/destination-single/destination-single.component";
import { HotelSingleComponent } from "./pages/hotel-single/hotel-single.component";
import { AboutComponent } from "./pages/about/about.component";
import { CategoriesComponent } from "./admin/categories/categories.component";
import { OurServicesComponent } from "./admin/our-services/our-services.component";
import { RoomsComponent } from "./admin/rooms/rooms.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "single", component: SingleComponent },
  { path: "home", component: HomeComponent },
  { path: "destination", component: DestinationComponent },
  { path: "destination-single", component: DestinationSingleComponent },
  { path: "hotel-single", component: HotelSingleComponent },
  { path: "hotel", component: HotelComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "admin/categories", component: CategoriesComponent,canActivate: [AuthGuard]},
  { path: "admin/our-services", component: OurServicesComponent,canActivate:[AuthGuard]},
  { path: "admin/rooms", component: RoomsComponent,canActivate: [AuthGuard] },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
