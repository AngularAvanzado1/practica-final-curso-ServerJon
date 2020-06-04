import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Region } from '@p-final/shared/data';

import { HomeService } from '../../services/home.service';
import { RegionService } from './../../services/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'p-final-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public regions$: Observable<Region[]>;

  constructor(private homeService: HomeService, private regionService: RegionService, private nav: Router) {
    console.log("Home Component");
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.regions$ = this.homeService.getRegions(
      'http://api.worldbank.org/v2/region/?format=json'
    );
  }

  goToRegion(region: Region): void {
    this.regionService.region$.next(region);

    this.nav.navigate(["/region/"+region.code]);
  }
}
