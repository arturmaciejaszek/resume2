import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(environment.fireConfig);

@Injectable()
export class DataService {
    private data: {education: any[], skills: {}, work: any[]};
    dataSubject = new Subject<{education: any[], skills: {}, work: any[]}>();

    database = firebase.firestore();

    constructor(private translate: TranslateService) {}

    dataInit() {
        this.translate.onLangChange.subscribe( res => this.fetchData(res.lang) );
    }

    fetchData(lang: string) {
        this.database.collection(lang).get()
            .then( snapshot => snapshot.forEach( doc => {
                this.data = {
                    skills: doc.data().skills,
                    education: doc.data().education,
                    work: doc.data().work
                };
                this.dataSubject.next({...this.data});
            } ) );

        // this.db.collection(lang)
        //     .snapshotChanges()
        //     .map( dataArray => {
        //         this.data = {
        //             skills: dataArray[0].payload.doc.data().skills,
        //             work: dataArray[0].payload.doc.data().work,
        //             education: dataArray[0].payload.doc.data().education,
        //         };
        //         return this.data;
        //     })
        //     .subscribe( res => {
        //         this.dataSubject.next({...this.data});
        //     });
    }

    pushData(data) {
        // this.db.collection('en').doc('tDZCsr9qk7qB65QZYwtS')
        //     .update(data).then( res => console.log(res) ).catch( err => console.log(err));
    }


}
