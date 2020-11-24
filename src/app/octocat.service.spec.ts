import { TestBed } from '@angular/core/testing';

import { OctocatService } from './octocat.service';

describe('OctocatService', () => {
  let service: OctocatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctocatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
