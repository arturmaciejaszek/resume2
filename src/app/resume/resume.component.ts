import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from './../shared/data.service';
// import { en } from './../../data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  langs: string[];
  language = this.translate.getBrowserLang();

  constructor(private translate: TranslateService, private data: DataService) {}

  ngOnInit() {
    this.data.dataInit();
    this.langs = this.translate.getLangs();
    // this.data.pushData(en);
  }

  onChange(e) {
    this.language = e;
    this.translate.use(this.language);
  }
}
