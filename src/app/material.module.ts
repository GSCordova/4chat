import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const Material = [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
];

@NgModule({
  imports: [ Material ],
  exports: [ Material ],
})
export class MaterialComponentsModule { }
