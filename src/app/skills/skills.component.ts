import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
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
  showSpinner = true;
  dataState: any = {};
  selectedSkill: Skill = {
    name: null,
    details: null,
    prof: null
  };
  stars = { full: [], half: [], empty: [] };

  constructor(
    private data: DataService,
    private translate: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSub = this.data.dataSubject
      .pipe(
        tap(() =>
          this.translate
            .get('skills')
            .pipe(take(1))
            .subscribe(t => {
              this.selectedSkill.name = t.sName;
              this.selectedSkill.details = t.sDesc;
              this.stars = { full: [], half: [], empty: [] };
            })
        )
      )
      .subscribe(res => {
        this.dataState = res.skills;
        this.showSpinner = false;
      });
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
  }

  setItem(skill: Skill) {
    this.selectedSkill = skill;
    this.stars = { full: [], half: [], empty: [] };
    this.profCheck();
  }

  // MAXIMUM PROFICIENCY SET TO 6 (3 = 6 divided by 2)
  profCheck() {
    const prof = this.selectedSkill.prof;
    if (prof !== null || undefined) {
      for (let i = 0; i < Math.floor(prof / 2); i++) {
        this.stars.full.push(1);
      }
      for (let i = 0; i < Math.floor(3 - prof / 2); i++) {
        this.stars.empty.push(1);
      }
      if (prof % 2 !== 0) {
        this.stars.half.push(1);
      }
    }
  }
}
