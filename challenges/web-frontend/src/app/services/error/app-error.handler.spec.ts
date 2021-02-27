import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';

import { AppErrorHandler } from './app-error.handler';

describe('AppErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, MatSnackBarModule],
    providers: [ AppErrorHandler ]
  }));

  it('should be created', () => {
    const service: AppErrorHandler = TestBed.get(AppErrorHandler);
    expect(service).toBeTruthy();
  });
});
