import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './../../models/skill.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() selectedSkill: Skill = {
    name: null,
    details: null,
    prof: null
  };
  @Input() stars = {full: [], half: [], empty: []};

  constructor() {}

  ngOnInit() {
  }

}
