import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { UserModel } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dbPath = '/users';
  usersRef: AngularFireList<UserModel> = null;

  constructor(private afDB: AngularFireDatabase) {
    this.usersRef = this.afDB.list(this.dbPath);
  }

  getUsersList() {
    return this.usersRef;
  }

  updateUser(key: string, user: any) {
    return this.usersRef.update(key, user);
  }


}
