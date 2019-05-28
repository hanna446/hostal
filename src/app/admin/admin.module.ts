import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations:[CategoriesComponent,OurServicesComponent,RoomsComponent],
  exports:[],
  imports:[CommonModule,AppRoutingModule,SharedModule,FormsModule]
})

export class AdminModule{}