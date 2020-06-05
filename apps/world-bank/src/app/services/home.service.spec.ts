import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`THEN: should return an observable when call 'getRegions()'`, () => {
    const service: HomeService = TestBed.get(HomeService);
    const regions$: Observable<any> = service.getRegions('');
    expect(regions$).toBeInstanceOf(Observable);
  });

});
