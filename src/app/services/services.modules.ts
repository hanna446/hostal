import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CategoriesService } from './categories.service';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],

  exports: [],

  imports: [CommonModule, HttpClientModule
  ],

  providers:[CategoriesService,AuthService]
})
export class ServicesModule {}
