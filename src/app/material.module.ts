import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class MaterialModule {}
