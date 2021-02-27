// guard test tutorial
// https://keepgrowing.in/angular/how-to-test-angular-authguard-examples-for-the-canactivate-interface/
//


import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const routeMock: any = { snapshot: {} };
  const routeStateMock: any = { snapshot: {}, url: '/overview' };
  const routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGuard, { provide: Router, useValue: routerMock }]
    });
  });



  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should redirect an unauthenticated user to the login route', inject([AuthGuard], async (guard: AuthGuard) => {
    expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login'], Object({ queryParams: Object({ returnUrl: '/overview' }) }));
  }));

  it('should redirect an authenticated user to access app', inject([AuthGuard], async (guard: AuthGuard) => {
    spyOn(guard, 'isUserLoggedIn').and.returnValue(true);
    expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  }));

});
