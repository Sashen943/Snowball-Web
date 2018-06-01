import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    const x = this.userService.getData();
    x.subscribe(item => {
      this.userList = [];
      // item.forEach(element => {
      //   const y = element.payload.toJSON();
      //   y['$key'] = element.key;
      //   this.userList.push(y as User);
      // });
      console.log(item);

    });
  }

  onEdit(user: User) {
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.userService.deleteUser(key);
      swal({
        title: 'User deleted',
        text: 'User has been deleted',
        icon: 'success',
      });
  }
}
}
