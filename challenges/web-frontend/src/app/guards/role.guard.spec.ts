import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoleGuard } from './role.guard';

describe('RoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [RoleGuard]
    });
  });

  it('should ...', inject([RoleGuard], (guard: RoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
