import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule
  } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatExpansionModule
    ]
})
export class MaterialModule {}
