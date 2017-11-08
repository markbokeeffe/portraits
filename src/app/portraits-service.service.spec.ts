import { TestBed, inject } from '@angular/core/testing';

import { PortraitsServiceService } from './portraits-service.service';

describe('PortraitsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortraitsServiceService]
    });
  });

  it('should be created', inject([PortraitsServiceService], (service: PortraitsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
