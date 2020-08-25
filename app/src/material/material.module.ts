import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    MatToolbarModule,
  ]
})
export class MaterialModule { }
