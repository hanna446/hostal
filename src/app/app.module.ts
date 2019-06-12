import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { PageModule } from "./pages/pages.module";
import { LoginComponent } from "./auth/login/login.component";
import { ServicesModule } from './services/services.module';


// enviroment
import { environment } from '../environments/environment';

// Firebase
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './auth/register/register.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MaterialModule } from './material/material.module';
import { KeyPipe } from './pipes/key.pipe'; 

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent,KeyPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    PageModule,
    ServicesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MaterialModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
