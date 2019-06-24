import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.css']
})
export class NavPagesComponent implements OnInit {
  isUser: boolean = false;
  status: boolean = false;
  constructor(
    private authService:AuthService,
    private userService:UsersService
    ) { }

  ngOnInit() {
    this.authService.userPermission().subscribe(data => this.isUser = data);
    this.isAuthStatus();
  }

  isAuthStatus() {

    this.userService.getUsersList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {

        for (const user of data) {
          this.authService.uid.forEach(uid => {
            if (user.uid === uid) {
              this.isUser = true;
              this.status = user.permissionState;
            }
          });
        }
      });


  }

}
