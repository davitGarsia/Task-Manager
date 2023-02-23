import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectIssueTypeComponent } from './project-issue-type/project-issue-type.component';
import { ProjectUsersComponent } from './project-users/project-users.component';


@NgModule({
  declarations: [
    ProjectInfoComponent,
    ProjectBoardComponent,
    ProjectIssueTypeComponent,
    ProjectUsersComponent
  ],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule
  ]
})
export class ProjectSettingModule { }
