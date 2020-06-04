import { RegionService } from './../../services/region.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country, Region } from '@p-final/shared/data';
import { HttpQueriesService } from '@p-final/shared/data';

@Component({
  selector: 'p-final-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionComponent implements OnInit {
  public countries$: Observable<Country[]>;
  public codeRegion: string;
  public region: Region;

  constructor(
    private httpQueriesService: HttpQueriesService,
    private activatedRoute: ActivatedRoute,
    private regionService: RegionService
  ) {
    console.log('Region Component');

    activatedRoute.paramMap.subscribe((params) => {
      this.codeRegion = params.get('code');
    });
  }

  ngOnInit(): void {

    this.loadRegion();

    this.loadCountries();
  }

  loadCountries(): void {
    this.countries$ = this.httpQueriesService.get(
      `http://api.worldbank.org/v2/region/${this.codeRegion}/country?per_page=1000&format=json`
    );
  }

  loadRegion(): void {
    this.regionService.region$.subscribe({
      next: region => {
        this.region = region;
      }
    })
  }
}
