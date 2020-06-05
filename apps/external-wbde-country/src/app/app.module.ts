import {
  WebComponentsModule,
  WorldBankCountryComponent,
} from '@p-final/shared/web-components';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import 'zone.js';

@NgModule({
  imports: [BrowserModule, WebComponentsModule],
  entryComponents: [WorldBankCountryComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(WorldBankCountryComponent, {
      injector: this.injector,
    });
    customElements.define('wbde-country', el);
  }
}
