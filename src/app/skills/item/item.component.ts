import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './../../models/skill.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {

  }

}
