import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '@p-final/shared/data';
import { HttpQueriesService } from '@p-final/shared/data';

@Component({
  selector: 'p-final-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  public countries$: Observable<Country[]>;
  public codeCountry: string;

  constructor(
    private httpQueriesService: HttpQueriesService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log("Country Component");    

    activatedRoute.paramMap.subscribe((params) => {
      this.codeCountry = params.get('id');
    });
  }

  ngOnInit(): void {
    this.loadDataCountry();
  }

  loadDataCountry(): void {
    this.countries$ = this.httpQueriesService.get(
      `http://api.worldbank.org/V2/country/${this.codeCountry}?format=json`
    );
  }
}
