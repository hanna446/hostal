import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from './admin/admin.module';
import { PageModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule,AdminModule,PageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
