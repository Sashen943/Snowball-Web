import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SsrPageComponent } from './ssr-page/ssr-page.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    SsrPageComponent,
    UserAddComponent,
    UserComponent,
    UsersComponent,
    UserListComponent,
    UserDeleteComponent,
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    UserAddComponent
  ]
})
export class UiModule {}
