import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Region } from '@p-final/shared/data';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'p-final-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public regions$: Observable<Region[]>;

  constructor(private homeService: HomeService) {
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
}
