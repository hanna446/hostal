import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
import { KeyPipe } from '../pipes/key.pipe';



@NgModule({
  declarations:[CategoriesComponent,OurServicesComponent,RoomsComponent,KeyPipe],
  exports:[],
  imports:[CommonModule,AppRoutingModule,SharedModule,FormsModule]})

export class AdminModule{}