import { NgModule } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from "@angular/material/core";
import {
  MatFormFieldModule, MatFormFieldControl,
} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";


import {MatTableModule} from '@angular/material/table';

const MaterialComponents = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatIconModule,
  MatExpansionModule,
  MatTableModule
  // MatFormFieldControl
  // MatDatepickerInput
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
