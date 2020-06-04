import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { InformationCountries, Country } from '@p-final/shared/data';

@Injectable({
  providedIn: 'root',
})
export class HttpQueriesService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<Country[]> {
    return this.http.get<InformationCountries>(url).pipe(
      map((response: InformationCountries) => {
        return response[1];
      })
    );
  }
}
