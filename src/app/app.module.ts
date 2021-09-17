import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { NgxLazyElModule } from 'seo-manager-lazy'

import { AppComponent } from './app.component';
import { SeoCurrencyComponent } from './seo-currency/seo-currency.component';
import { createCustomElement } from '@angular/elements';

export const lazyConfig = [
  {
    component: SeoCurrencyComponent,
    name: 'seo-currency',
    selector: 'seo-currency-module',
    loadChildren: () =>
      import('./componentes/seo-currency/seo-currency.module').then(m => m.SeoCurrencyModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SeoCurrencyComponent
  ],
  imports: [
    BrowserModule,
    NgxLazyElModule.forRoot(lazyConfig)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }
  ngDoBootstrap() {

    for (let x = 0; x < lazyConfig.length; x++) {
      if (lazyConfig[x].component) {
        let el = createCustomElement(lazyConfig[x].component, { injector: this.injector });
        customElements.define(lazyConfig[x].name, el);

      }
    }
  }
}
