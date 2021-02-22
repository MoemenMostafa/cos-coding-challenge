import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate , Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AppErrorHandler } from '../services/error/app-error.handler';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    let loggedInUser = this.authService.loggedInUserValue;

    const roles = route.data.roles as Array<string>;
    const loggedInUserRoles = loggedInUser.privileges.split("~");
    const matchedRoles = roles.filter(value => loggedInUserRoles.includes(value));

    if (matchedRoles.length > 0) {
      return true;
    }
    AppErrorHandler.showError({message: "USER_MISSING_ROLE"});
    return false;
  }
}
