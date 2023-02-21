import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './service/user-login.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  constructor(
    private userLoginService: UserLoginService,
    private route: Router
  ) {}
  canActivate(): boolean {
    if (this.userLoginService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);

      return false;
    }
  }
}
