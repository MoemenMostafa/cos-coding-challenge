import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuctionsService } from './auctions.service';

describe('AuctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AuctionsService = TestBed.get(AuctionsService);
    expect(service).toBeTruthy();
  });
});
