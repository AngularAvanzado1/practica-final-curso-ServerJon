import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

const routes: Routes = [{ path: '', component: RegionComponent }];

@NgModule({
  declarations: [RegionComponent, CountriesListComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    RouterModule.forChild(routes),
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegionModule {}
