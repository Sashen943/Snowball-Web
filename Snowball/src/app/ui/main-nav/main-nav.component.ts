import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  show = false;

  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.signOut();
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  moveToHome() {
    this.router.navigate(['home']);
   }

}
