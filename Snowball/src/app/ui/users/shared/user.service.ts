import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase ) { }
getData() {
    return this.firebase.list('users').valueChanges();
    // return this.userList;
  }

  insertUser(user: User) {
    this.userList.push({
      email: user.email,
      admin: user.admin,
      active: user.active,
    });
  }

  updateUser(user: User) {
    this.userList.update(user.$key,
      {
        email: user.email,
        admin: user.admin,
        active: user.active,
      });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }
}
