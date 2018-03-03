import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SortbyPipe } from './sortby.pipe';
import { MaterialModule } from './../material.module';

@NgModule({
    declarations: [
        SortbyPipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        SortbyPipe,
        TranslateModule
    ]
})
export class SharedModule {}
