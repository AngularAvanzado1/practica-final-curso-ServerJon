import { Component, OnInit } from '@angular/core';

import { HttpQueriesService } from '@p-final/shared/data';

@Component({
  selector: 'p-final-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpQueriesService) {}

  ngOnInit(): void {

    this.getInfo();
  }

  getInfo(): void {
    this.httpService.get('http://api.worldbank.org/v2/region/?format=json');
  }

}
