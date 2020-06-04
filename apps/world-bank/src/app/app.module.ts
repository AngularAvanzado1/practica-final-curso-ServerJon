import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { UiModule } from '@p-final/shared/ui';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'home',
          loadChildren: () =>
            import('./components/home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'region/:code',
          loadChildren: () =>
            import('./components/region/region.module').then(
              (m) => m.RegionModule
            ),
        },
        {
          path: 'country/:id',
          loadChildren: () =>
            import('./components/country/country.module').then(
              (m) => m.CountryModule
            ),
        },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
      ],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
