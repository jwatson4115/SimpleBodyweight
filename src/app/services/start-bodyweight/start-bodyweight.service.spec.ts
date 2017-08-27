import { TestBed, inject } from '@angular/core/testing';

import { StartBodyweightService } from './start-bodyweight.service';

describe('StartBodyweightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartBodyweightService]
    });
  });

  it('should be created', inject([StartBodyweightService], (service: StartBodyweightService) => {
    expect(service).toBeTruthy();
  }));
});
