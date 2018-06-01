import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { UserFormComponent } from './ui/user-form/user-form.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { UserAddComponent } from './ui/user-add/user-add.component';
import { UserDeleteComponent } from './ui/user-delete/user-delete.component';
import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';
import { UserComponent } from './ui/users/user/user.component';
import { UserListComponent } from './ui/users/user-list/user-list.component';




const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'delete', component: UserDeleteComponent },
  { path: 'ssr', component: SsrPageComponent },
  { path: 'list', component: UserListComponent },
  { path: '', component: UserLoginComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
