import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoCurrencyComponent } from './seo-currency.component';


@NgModule({
  declarations: [SeoCurrencyComponent],
  imports: [
    CommonModule
  ],
  exports : [SeoCurrencyComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeoCurrencyModule { 
  customElementComponent: Type<any> = SeoCurrencyComponent;
}
