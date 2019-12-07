import { TestBed } from '@angular/core/testing';

import { MiningEngineService } from './mining-engine.service';

describe('MiningEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiningEngineService = TestBed.get(MiningEngineService);
    expect(service).toBeTruthy();
  });
});
