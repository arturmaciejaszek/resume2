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
    MatProgressSpinnerModule
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
        MatProgressSpinnerModule
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
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {}
