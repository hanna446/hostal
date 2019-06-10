import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesService } from "./categories.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { OurServicesService } from "./our-services.service";
import { RoomsService } from "./rooms.service";

@NgModule({
  declarations: [],

  exports: [],

  imports: [CommonModule, HttpClientModule],

  providers: [CategoriesService, AuthService, OurServicesService, RoomsService]
})
export class ServicesModule {}
