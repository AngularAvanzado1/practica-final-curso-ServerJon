import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InformationRegionsList, Region } from '@p-final/shared/data';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getRegions(url: string): Observable<Region[]> {
    return this.http.get<InformationRegionsList>(url).pipe(
      map((response: InformationRegionsList) => {

        let filteredArray = new Array;

        response[1].forEach((region) => {
          if (this.is_numeric(region.id)) {
            filteredArray.push(region);
          }
        });

        return filteredArray;
      })
    );
  }

  private is_numeric(value: string): boolean {
    return /^\d+$/.test(value);
  }
}
