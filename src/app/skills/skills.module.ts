import { NgModule } from '@angular/core';

import { DialogComponent } from './dialog/dialog.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { SkillsComponent } from './skills.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SkillsComponent,
        ItemComponent,
        DetailsComponent,
        DialogComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SkillsComponent,
    ],
    entryComponents: [DialogComponent]
})
export class SkillsModule {}

