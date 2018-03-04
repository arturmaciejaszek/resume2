import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';


@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ServerTransferStateModule,
        FlexLayoutServerModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
