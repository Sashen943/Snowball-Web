import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {

  constructor(public auth: AuthService, private router: Router) {
  }

}
