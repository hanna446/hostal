import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionsComponent } from './shared/sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
