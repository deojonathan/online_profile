import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
