import { TestBed, inject } from '@angular/core/testing';

import { SubRootService } from './sub-root.service';

describe('SubRootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubRootService]
    });
  });

  it('should be created', inject([SubRootService], (service: SubRootService) => {
    expect(service).toBeTruthy();
  }));
});
