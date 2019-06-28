import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { map } from 'rxjs/operators';
import { UserModel } from '../../models/user.models';
import { AuthService } from "../../services/auth.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersArray: UserModel[] = [];

  constructor(
    private userService: UsersService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    /** Se escucha los cambios en la lista.
     * obtiene la data del cambio
     */

    this.userService.getUsersList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => this.usersArray = data);
  }

  updateStatus(key: string, isActive: boolean) {
    this.userService.updateUser(key, { permissionState: isActive })
      .catch(err => swal.fire('You have an error', err, 'error'));
  }

  logout() {
    this.authService.logout();
  }

}
