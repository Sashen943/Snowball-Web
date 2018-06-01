import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(userForm: NgForm) {
    if (userForm.value.$key == null) {
      this.userService.insertUser(userForm.value);
    } else {
      this.userService.updateUser(userForm.value); }
    this.resetForm(userForm);
    swal({
      title: 'User added',
      text: 'Registered with username: ' + this.userForm.value['email'],
      icon: 'success',
    });
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null) {
      userForm.reset();
    }
    this.userService.selectedUser = {
      $key: '',
      admin: '',
      active: '',
      email: '',
      passowrd: '',
    };
  }
}
