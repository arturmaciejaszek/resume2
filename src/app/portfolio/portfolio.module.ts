import { NgModule } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [PortfolioComponent],
  declarations: [PortfolioComponent],
  providers: []
})
export class PortfolioModule {}
