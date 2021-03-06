import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  dataState: any = [];
  showSpinner = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.dataSub = this.data.dataSubject.subscribe(res => {
      this.dataState = res.education;
      this.showSpinner = false;
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
