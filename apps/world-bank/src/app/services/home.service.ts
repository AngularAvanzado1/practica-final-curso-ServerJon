import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Information, Region } from '@p-final/shared/data';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getRegions(url: string): Observable<Region[]> {
    return this.http.get<Information>(url).pipe(
      map((response: Information) => {

        let filteredArray = new Array;

        response[1].forEach((region) => {
          if (region.id.length > 0) {
            filteredArray.push(region);
          }
        });

        return filteredArray;
      })
    );
  }
}
