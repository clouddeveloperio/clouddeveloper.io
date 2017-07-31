import { TestBed, inject } from '@angular/core/testing';

import { AppInsightsService } from './app-insights.service';

describe('AppInsightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInsightsService]
    });
  });

  it('should be created', inject([AppInsightsService], (service: AppInsightsService) => {
    expect(service).toBeTruthy();
  }));
});
