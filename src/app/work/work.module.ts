import { WorkItemComponent } from './work-item/work-item.component';
import { WorkComponent } from './work.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        WorkComponent,
        WorkItemComponent
    ],
    imports: [SharedModule],
    exports: [
        WorkComponent
    ]
})
export class WorkModule {}
