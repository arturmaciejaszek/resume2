import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader
} from '@ngx-translate/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationModule } from './education/education.module';
import { ResumeComponent } from './resume/resume.component';
import { DataService } from './shared/data.service';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './skills/skills.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkModule } from './work/work.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PortfolioModule } from './portfolio/portfolio.module';

const appRoutes: Routes = [
  { path: '', component: ResumeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    WelcomeComponent,
    ContactComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFirestoreModule,
    SharedModule,
    // BrowserModule.withServerTransition({ appId: 'resumeUniversal'}),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [PLATFORM_ID, HttpClient]
    //   }
    // }),
    FormsModule,
    SkillsModule,
    EducationModule,
    WorkModule,
    PortfolioModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [TranslateService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
// export class AppModule {
//   constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {}
// }

// export function translateFactory(
//   platformId: any,
//   http: HttpClient
// ): TranslateLoader {
//   const browserLoader = new TranslateHttpLoader(this.http);

//   return new UniversalTranslateLoader(
//     platformId,
//     browserLoader,
//     'dist-server/assets/i18n'
//   );
// }
