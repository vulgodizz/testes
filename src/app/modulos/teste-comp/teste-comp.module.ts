import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteCompComponent } from './teste-comp.component';



@NgModule({
  declarations: [
    TesteCompComponent
  ],
  imports: [
    CommonModule
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteCompModule { 

  customElementComponent: Type<any> = TesteCompComponent;
}
