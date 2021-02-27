import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppErrorHandler } from '../services/error/app-error.handler';

import { RoleGuard } from './role.guard';

describe('RoleGuard', () => {
  const injector = getTestBed();
  const routeMock: any = { snapshot: {} };
  const routeStateMock: any = { snapshot: {}, url: '/overview' };
  const routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [RoleGuard]
    });
  });

  it('should ...', inject([RoleGuard], (guard: RoleGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should reject access to authenticated user without right privilege to access page',
    inject([RoleGuard], async (guard: RoleGuard) => {
      spyOn(guard, 'isMatchedRole').and.returnValue(false);
      spyOn(guard, 'showError').and.returnValue(false);
      expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    }));

  it('should allow access to authenticated user with right privilege to access page', inject([RoleGuard], async (guard: RoleGuard) => {
    spyOn(guard, 'isMatchedRole').and.returnValue(true);
    expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  }));
});
