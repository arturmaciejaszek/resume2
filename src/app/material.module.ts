import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
  } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule
    ]
})
export class MaterialModule {}
