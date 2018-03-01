import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './../shared/data.service';
import { Skill } from './../models/skill.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  // skillGroup: string[] = [];
  dataState: any = {};
  selectedSkill: Skill = {
    name: 'Skill Name',
    group: 'language',
    details: 'Details about selected skill. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    + ' Quas, corrupti! Laudantium, omnis in. Nihil fugit ex ipsum. Eos asperiores officiis inventore beatae'
    + ' eligendi quisquam mollitia dolor, velit, tempora, soluta harum!',
    prof: null
  };
  stars = {full: [], half: [], empty: []};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.dataSubject
      .map( res => res.skills)
      .subscribe(res => {
        this.dataState = res;
        // this.skillGroup = Object.keys(this.dataState);
        console.log(this.dataState);
    } );
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  setItem(skill: Skill) {
    this.selectedSkill = skill;
    this.stars = {full: [], half: [], empty: []};
    this.profCheck();
  }

  // MAXIMUM PROFICIENCY SET TO 6 (3 = 6 divided by 2)
  profCheck() {
    const prof = this.selectedSkill.prof;
    if (prof !== null || undefined) {
      for (let i = 0; i < Math.floor(prof / 2); i++ ) {
        this.stars.full.push(1);
      }
      for (let i = 0; i < Math.floor(3 - (prof / 2)); i++) {
        this.stars.empty.push(1);
      }
      if (prof % 2 !== 0) {
        this.stars.half.push(1);
      }
    }
  }

  check() {
    console.log('1');
  }

}
