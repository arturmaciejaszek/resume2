import { environment } from './../environments/environment';
import { UniversalTranslateLoader } from '@ngx-universal/translate-loader';
import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { DataService } from './shared/data.service';
import { ResumeComponent } from './resume/resume.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './skills/skills.module';
import { EducationModule } from './education/education.module';
import { WorkModule } from './work/work.module';

const appRoutes: Routes = [
  {path: '', component: ResumeComponent, pathMatch: 'full'},
    {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    WelcomeComponent,
    ContactComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFirestoreModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'resumeUniversal'}),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [
          PLATFORM_ID,
          HttpClient
        ]
      }
    }),
    FormsModule,
    SkillsModule,
    EducationModule,
    WorkModule
  ],
  providers: [TranslateService, DataService],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }
 }

export function translateFactory(platformId: any, http: HttpClient): TranslateLoader {
  const browserLoader = new TranslateHttpLoader(http);

  return new UniversalTranslateLoader(platformId, browserLoader, 'dist-server/assets/i18n');
}
