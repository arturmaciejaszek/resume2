import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';

import { DataService } from './../shared/data.service';
import { Skill } from './../models/skill.model';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  dataSub: Subscription;
  transSub: Subscription;
  dataState: any = {};
  selectedSkill: Skill = {
    name: null,
    details: null,
    prof: null
  };
  stars = {full: [], half: [], empty: []};

  constructor(private data: DataService, private translate: TranslateService, private dialog: MatDialog) { }

  ngOnInit() {
    this.transSub = this.translate.get('skills').subscribe(res => {
      this.selectedSkill.name = res.sName;
      this.selectedSkill.details = res.sDesc;
    });
    this.dataSub = this.data.dataSubject
      .subscribe(res => {
        this.dataState = res.skills;
    } );
  }

  onMobileTap(item: Skill) {
    this.setItem(item);
    this.dialog.open(DialogComponent, {
      data: {
        skill: this.selectedSkill,
        stars: this.stars
      },
      height: '80vh',
      width: '80vw',
      maxHeight: '450px'
  });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
    // this.transSub.unsubscribe();
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


}
