import { TestBed, inject } from '@angular/core/testing';

import { WebstompService } from './webstomp.service';

describe('WebstompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebstompService]
    });
  });

  it('should be created', inject([WebstompService], (service: WebstompService) => {
    expect(service).toBeTruthy();
  }));
});
