import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../shared/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  // loadingSub: Subscription;
  dataState: any = [];
  showSpinner = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dataSub = this.data.dataSubject
      .subscribe(res => {
        this.dataState = res.work;
        this.showSpinner = false;
    } );
    // this.loadingSub = this.data.loadingIndicator.subscribe( res => this.showSpinner = res );
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

}
