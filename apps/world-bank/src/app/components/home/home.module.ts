import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, RegionsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(routes),
    MatSortModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
