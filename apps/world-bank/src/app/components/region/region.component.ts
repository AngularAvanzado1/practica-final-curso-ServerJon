import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Country } from '@p-final/shared/data';

import { HttpQueriesService } from '@p-final/shared/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'p-final-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionComponent implements OnInit {
  public countries$: Observable<Country[]>;
  public codeRegion: string;

  constructor(
    private httpQueriesService: HttpQueriesService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Region Component');

    activatedRoute.paramMap.subscribe((params) => {
      this.codeRegion = params.get('code');
    });
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countries$ = this.httpQueriesService.get(
      `http://api.worldbank.org/v2/region/${this.codeRegion}/country?per_page=1000&format=json`
    );
  }
}
