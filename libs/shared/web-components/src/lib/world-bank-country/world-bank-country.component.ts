import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { Country, InformationCountries } from '@p-final/shared/data';

@Component({
  selector: 'wbde-country',
  templateUrl: './world-bank-country.component.html',
  styleUrls: ['./world-bank-country.component.css']
})
export class WorldBankCountryComponent implements OnInit {

  @Input() public id: string;
  public country$: Observable<Country>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.country$ = this.http.get(`http://api.worldbank.org/V2/country/${this.id}?format=json`).pipe(
      map((response: InformationCountries) => {
        return response[1][0];
      })
    );
  }

}
