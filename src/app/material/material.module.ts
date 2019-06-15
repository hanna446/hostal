import { NgModule } from "@angular/core";
import { MatDatepickerModule, MatDatepickerToggleIcon } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponents = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatDatepickerToggleIcon
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
