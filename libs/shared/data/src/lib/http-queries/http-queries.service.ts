import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Information } from '@p-final/shared/data';

@Injectable({
  providedIn: 'root',
})
export class HttpQueriesService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<Information> {
    return this.http.get<Information>(url).pipe(
      filter(response => response[1])
    );
  }
}
