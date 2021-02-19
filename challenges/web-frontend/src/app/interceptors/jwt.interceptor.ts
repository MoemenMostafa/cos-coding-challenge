import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let logedInUser = this.authService.loggedInUserValue;
        if (logedInUser && logedInUser.token) {
            request = request.clone({
                setHeaders: { 
                    userid: `${logedInUser.userId}`,
                    authtoken: `${logedInUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}