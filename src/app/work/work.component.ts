import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from './../shared/data.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  dataState: any = [];
  showSpinner = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.dataSub = this.data.dataSubject.subscribe(res => {
      this.dataState = res.work;
      this.showSpinner = false;
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
