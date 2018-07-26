import { TestBed, inject } from '@angular/core/testing';

import { DataPathwayService } from './data-pathway.service';

describe('DataPathwayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPathwayService]
    });
  });

  it('should be created', inject([DataPathwayService], (service: DataPathwayService) => {
    expect(service).toBeTruthy();
  }));
});
