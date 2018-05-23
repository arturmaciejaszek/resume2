import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { Work } from './../../models/work.model';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {
  @Input() work: Work;

  constructor() {}

  ngOnInit() {}

  imgFallback(): string {
    const logo = this.work.logo;
    const split = logo.split('.');
    return '/assets/img/' + split[0] + '.png';
  }
}
