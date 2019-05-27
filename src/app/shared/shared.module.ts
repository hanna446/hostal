import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { NavPagesComponent } from "./nav-pages/nav-pages.component";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, NavComponent, NavPagesComponent],

  exports: [FooterComponent, NavComponent, NavPagesComponent],

  imports: [CommonModule,AppRoutingModule]
})
export class SharedModule {}
