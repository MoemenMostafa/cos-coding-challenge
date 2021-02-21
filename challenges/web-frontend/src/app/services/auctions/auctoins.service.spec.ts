import { TestBed } from '@angular/core/testing';

import { AuctoinsService } from './auctoins.service';

describe('AuctoinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctoinsService = TestBed.get(AuctoinsService);
    expect(service).toBeTruthy();
  });
});
