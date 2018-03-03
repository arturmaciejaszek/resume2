import { NgModule } from '@angular/core';

import { EducationComponent } from './education.component';
import { EduItemComponent } from './edu-item/edu-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EducationComponent,
        EduItemComponent
    ],
    imports: [SharedModule],
    exports: [EducationComponent]
})
export class EducationModule {}
