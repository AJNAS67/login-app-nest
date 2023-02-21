import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { ShowUsersComponent } from './component/admin/show-users/show-users.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';
import { AthInterceptor } from './ath.interceptor';
import { ProfileComponent } from './component/profile/profile.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { TDirectiveDirective } from './component/t-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    AdminHomeComponent,
    ShowUsersComponent,
    AdminLoginComponent,
    ProfileComponent,
    AdminHeaderComponent,
    TDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AthInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
