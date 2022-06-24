import { TestBed } from '@angular/core/testing';

import { BreakingService } from './breaking.service';

describe('BreakingService', () => {
  let service: BreakingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
