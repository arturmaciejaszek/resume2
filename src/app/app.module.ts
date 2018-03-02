import { DataService } from './shared/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ItemComponent } from './skills/item/item.component';
import { WorkItemComponent } from './work/work-item/work-item.component';


const appRoutes: Routes = [
  {path: '', component: ResumeComponent, pathMatch: 'full'},
    {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    WelcomeComponent,
    SkillsComponent,
    EducationComponent,
    WorkComponent,
    ContactComponent,
    ItemComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
