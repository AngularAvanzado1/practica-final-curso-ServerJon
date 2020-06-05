import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '@p-final/shared/data';

@Component({
  selector: 'p-final-info-country',
  templateUrl: './info-country.component.html',
  styleUrls: ['./info-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCountryComponent implements OnInit {

  @Input() public country: Country;

  constructor() { 
    console.log("Info Country Component");
  }

  ngOnInit(): void {
  }

}
