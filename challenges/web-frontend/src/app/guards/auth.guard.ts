import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn;

  constructor(private router: Router, private authService: AuthService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.isLoggedIn = this.authService.loggedInUserValue;

    if (this.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}


