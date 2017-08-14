import { TestBed, inject } from '@angular/core/testing';

import { VisitorCounterService } from './visitor-counter.service';

describe('VisitorCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorCounterService]
    });
  });

  it('should be created', inject([VisitorCounterService], (service: VisitorCounterService) => {
    expect(service).toBeTruthy();
  }));
});
