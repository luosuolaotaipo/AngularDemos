import { TestBed, inject } from '@angular/core/testing';

import { CompLevelService } from './comp-level.service';

describe('CompLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompLevelService]
    });
  });

  it('should be created', inject([CompLevelService], (service: CompLevelService) => {
    expect(service).toBeTruthy();
  }));
});
