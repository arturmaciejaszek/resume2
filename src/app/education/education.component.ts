import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  dataState: any = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.dataSubject
      .map( res => res.education)
      .subscribe(res => {
        this.dataState = res;
    } );
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

}
