import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserAuthGuard],
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
