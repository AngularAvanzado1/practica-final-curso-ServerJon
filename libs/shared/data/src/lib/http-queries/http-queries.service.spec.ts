import { TestBed } from '@angular/core/testing';

import { HttpQueriesService } from './http-queries.service';

describe('HttpQueriesService', () => {
  let service: HttpQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
