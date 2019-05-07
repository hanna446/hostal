import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostalServicesComponent } from './pages/hostal-services/hostal-services.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HostalServicesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
