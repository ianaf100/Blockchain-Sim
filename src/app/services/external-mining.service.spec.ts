import { TestBed } from '@angular/core/testing';

import { ExternalMiningService } from './external-mining.service';

describe('ExternalMiningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalMiningService = TestBed.get(ExternalMiningService);
    expect(service).toBeTruthy();
  });
});
