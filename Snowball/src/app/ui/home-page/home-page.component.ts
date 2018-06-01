import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  moveToAdd() {
   this.router.navigate(['add']);
  }

  moveToDelete() {
    this.router.navigate(['list']);
   }
}
