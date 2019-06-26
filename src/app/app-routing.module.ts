import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
// guard
import { AuthGuard } from './guards/auth.guard';
// pages
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { RoomComponent } from "./pages/room/room.component";
import { HomeComponent } from "./pages/home/home.component";
import { SingleComponent } from "./pages/single/single.component";
import { DestinationComponent } from "./pages/destination/destination.component";
import { DestinationSingleComponent } from "./pages/destination-single/destination-single.component";
import { HotelSingleComponent } from "./pages/hotel-single/hotel-single.component";
import { CategoriesComponent } from "./admin/categories/categories.component";
import { OurServicesComponent } from "./admin/our-services/our-services.component";
import { RoomsComponent } from "./admin/rooms/rooms.component";
import { UsersComponent } from './admin/users/users.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { RestaurantComponent } from './admin/restaurant/restaurant.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "single", component: SingleComponent },
  { path: "home", component: HomeComponent },
  { path: "destination", component: DestinationComponent },
  { path: "destination-single", component: DestinationSingleComponent },
  { path: "hotel-single", component: HotelSingleComponent },
  { path: "rooms", component: RoomComponent },
  { path: "reservation", component: ReservationComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "admin/users", component: UsersComponent },
  { path: "admin/categories", component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: "admin/our-services", component: OurServicesComponent, canActivate: [AuthGuard] },
  { path: "admin/restaurant", component: RestaurantComponent, canActivate: [AuthGuard] },
  { path: "admin/rooms", component: RoomsComponent, canActivate: [AuthGuard] },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
