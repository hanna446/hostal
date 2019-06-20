import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  fbUser: any;
  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate() {
    this.authService.isAuth()
      .subscribe(data => {
        this.fbUser = data;
        if (!this.fbUser) {
          this.router.navigate(["/login"]);
        }
      });

    return this.fbUser;


  }
}
