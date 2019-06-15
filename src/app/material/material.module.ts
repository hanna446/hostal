import { NgModule } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import {
  MatFormFieldModule, MatFormFieldControl,
} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";

const MaterialComponents = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatIconModule,
  // MatFormFieldControl
  // MatDatepickerInput
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
