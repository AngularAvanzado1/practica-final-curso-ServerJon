import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { WorldBankCountryComponent } from './world-bank-country/world-bank-country.component';

@NgModule({
  imports: [CommonModule, HttpClientModule ,MatCardModule, MatTabsModule, MatButtonModule],
  declarations: [WorldBankCountryComponent],
  exports: [WorldBankCountryComponent],
})
export class WebComponentsModule {}
