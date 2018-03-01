import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class DataService {
    private data: {education: any[], skills: {}, work: any[]};
    dataSubject = new Subject<{education: any[], skills: {}, work: any[]}>();

    constructor(private translate: TranslateService, private db: AngularFirestore) {}

    dataInit() {
        this.translate.onLangChange.subscribe( res => this.fetchData(res.lang) );
    }

    fetchData(lang: string) {
        this.db.collection(lang)
            .snapshotChanges()
            .map( dataArray => {
                this.data = {
                    skills: dataArray[0].payload.doc.data().skills,
                    work: dataArray[0].payload.doc.data().work,
                    education: dataArray[0].payload.doc.data().education,
                };
                return this.data;
            })
            .subscribe( res => {
                this.dataSubject.next({...this.data});
            });
    }

}
