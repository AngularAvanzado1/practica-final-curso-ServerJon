import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiModule } from '@p-final/shared/ui';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

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
          path: 'region:code',
          loadChildren: () =>
            import('./components/region/region.module').then((m) => m.RegionModule),
        },
        {
          path: 'country:id',
          loadChildren: () =>
            import('./components/country/country.module').then((m) => m.CountryModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
