import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate()  {
    // const isFirstLaunch = await this.authService.isFirstLaunch();
    // if (isFirstLaunch) {
      // this.router.navigate(['intro']);
      return false;
    // }
    // return true;
  }
}


