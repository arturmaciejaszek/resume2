import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

@Injectable()
export class DataService {
  private data: { education: any[]; skills: {}; work: any[] };
  dataSubject = new Subject<{ education: any[]; skills: {}; work: any[] }>();
  loadingIndicator = new Subject<boolean>();

  constructor(
    private translate: TranslateService,
    private db: AngularFirestore,
    private meta: Meta
  ) {}

  dataInit() {
    this.translate.onLangChange.subscribe(res => {
      this.fetchData(res.lang);
      this.translateTags();
    });
  }

  fetchData(lang: string) {
    this.db
      .collection(lang)
      .snapshotChanges()
      .pipe(
        map(
          (
            dataArray: DocumentChangeAction<{
              skills: {}[];
              work: {}[];
              education: {}[];
            }>[]
          ) => {
            this.data = {
              skills: dataArray[0].payload.doc.data().skills,
              work: dataArray[0].payload.doc.data().work,
              education: dataArray[0].payload.doc.data().education
            };
            return this.data;
          }
        )
      )
      .subscribe(res => {
        this.dataSubject.next({ ...this.data });
      });
  }

  translateTags() {
    let content;
    let desc;
    this.translate
      .get('meta')
      .subscribe(res => {
        content = res.metaContent;
        desc = res.metaDescription;
      })
      .unsubscribe();

    this.meta.updateTag({ name: 'description', content: content });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'arturmaciejaszek.pl'
    });
    this.meta.updateTag({ name: 'twitter:description', content: desc });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'AngularFirebase'
    });
    this.meta.updateTag({ property: 'og:description', content: desc });
  }
}
