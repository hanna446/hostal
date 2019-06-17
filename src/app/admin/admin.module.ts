import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
// import { KeyPipe } from '../pipes/key.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from '../components/modals/modals.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [CategoriesComponent, OurServicesComponent, RoomsComponent, ModalsComponent, UsersComponent],
  exports: [],
  imports: [CommonModule, AppRoutingModule, SharedModule, FormsModule,NgbModule]
})

export class AdminModule { }