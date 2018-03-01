import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  langs: string[];
  language = this.translate.getBrowserLang();

  constructor(private translate: TranslateService, private data: DataService) { }

  ngOnInit() {
    this.data.dataInit();
    this.langs = this.translate.getLangs();
  }

  onChange(e) {
    this.language = e;
    this.translate.use(this.language);
  }

}
