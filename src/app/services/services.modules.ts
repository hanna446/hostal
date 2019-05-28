import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CategoriesService } from './categories.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],

  exports: [],

  imports: [CommonModule, HttpClientModule
  ],

  providers:[CategoriesService]
})
export class ServicesModule {}
