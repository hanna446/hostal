import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UsersService } from '../../services/users.service';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isUser: boolean = false;
  status: boolean = false;
  constructor(
    private authService: AuthService,
    private userService: UsersService) { }

  ngOnInit() {

    this.authService.isAuth().subscribe(data => this.isUser = data);
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
