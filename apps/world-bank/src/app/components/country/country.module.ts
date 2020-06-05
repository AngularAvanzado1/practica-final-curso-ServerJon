import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { InfoCountryComponent } from './info-country/info-country.component';

import { WebComponentsModule } from '@p-final/shared/web-components';

const routes: Routes = [{ path: '', component: CountryComponent }];

@NgModule({
  declarations: [CountryComponent, InfoCountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    WebComponentsModule
  ],
})
export class CountryModule {}
