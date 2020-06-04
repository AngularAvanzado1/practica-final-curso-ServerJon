import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Country, Region } from '@p-final/shared/data';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'p-final-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesListComponent implements OnInit {

  @Input() public countries: Country[];
  @Input() public region: Region;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[] = ['id', 'name', 'capitalCity', 'longitude', 'latitude'];
  public dataSource: any;

  constructor() { 
    console.log("Countries List Component");
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.sort = this.sort;
  }

}
