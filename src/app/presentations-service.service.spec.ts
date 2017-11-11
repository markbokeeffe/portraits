import { TestBed, inject } from '@angular/core/testing';

import { PresentationsServiceService } from './presentations-service.service';

describe('PresentationsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresentationsServiceService]
    });
  });

  it('should be created', inject([PresentationsServiceService], (service: PresentationsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
