import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el'
import { AppComponent } from './app.component';
import { TesteCompSeoComponent } from './teste-comp-seo/teste-comp-seo.component';
import { createCustomElement } from '@angular/elements';

const lazyConfig = [
  {
    component: TesteCompSeoComponent,
    name: 'seo-teste',
    selector: 'seo-teste-module',
    loadChildren: () =>
      import('./modulos/teste-comp/teste-comp.module').then(m => m.TesteCompModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TesteCompSeoComponent
  ],
  imports: [
    BrowserModule,
    NgxLazyElModule.forRoot(lazyConfig),
  ],
  providers: [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
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
    };
  }


}

