import { TestBed, inject } from '@angular/core/testing';

import { StreamingControlService } from './streaming-control.service';

describe('StreamingControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamingControlService]
    });
  });

  it('should be created', inject([StreamingControlService], (service: StreamingControlService) => {
    expect(service).toBeTruthy();
  }));
});
