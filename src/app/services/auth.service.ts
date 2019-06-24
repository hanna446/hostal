import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.models";
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import Swal from "sweetalert2";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  uid: any[] = [];
  constructor(
    private afAauth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFireDatabase
  ) {
  }

  login(data: UserModel) {
    this.afAauth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.router.navigate(["/home"]);
      })
      .catch(err => {
        Swal.fire("You have an error", err.message, "error");
      });
  }

  register(data: UserModel) {
    this.afAauth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        // se arma el obj que se va a enviar a firebase
        const USER: UserModel = {
          name: data.name,
          email: res.user.email,
          uid: res.user.uid,
          office: data.office,
          permissionState: false
        };

        this.afDB
          .list("/users")
          .push(USER)
          .then(() => {
            this.router.navigate(["/home"]);
          });
      })
      .catch(err => {
        // error
        Swal.fire("Ops error", err.message, "error");
      });
  }

  logout() {
    this.afAauth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

  isAuth() {
    return this.afAauth.authState.pipe(
      map(fbUser => {
        if (fbUser == null) {
          this.router.navigate(["/login"]);

        }
        return fbUser != null;
      })
    );
  }

  
  userPermission() {
    return this.afAauth.authState.pipe(
      map(fbUser => {
        if (fbUser) {
          this.uid.push(fbUser.uid);

        }
        return fbUser != null;
      })
    );
  }



}
