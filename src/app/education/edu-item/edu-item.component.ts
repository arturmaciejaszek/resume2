import { Component, OnInit, Input } from '@angular/core';

import { Education } from './../../models/edu.model';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss']
})
export class EduItemComponent implements OnInit {
  @Input() edu: Education;

  constructor() { }

  ngOnInit() {
  }

}
