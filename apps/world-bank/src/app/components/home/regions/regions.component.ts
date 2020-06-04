import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { Region } from '@p-final/shared/data';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'p-final-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent implements OnInit {

  @Input() public regions: Region[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[] = ['id', 'name', 'iso2code', 'code'];
  public dataSource: any;

  constructor() { 
    console.log("Regions List Component");
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.regions);
    this.dataSource.sort = this.sort;
    
  }

}
