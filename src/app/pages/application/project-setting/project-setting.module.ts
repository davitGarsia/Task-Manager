import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectIssueTypeComponent } from './project-issue-type/project-issue-type.component';
import { ProjectUsersComponent } from './project-users/project-users.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MainLayoutRoutingModule} from "../../main-layout/main-layout-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProjectSettingComponent} from "./project-setting.component";


@NgModule({
  declarations: [
    ProjectSettingComponent,
    ProjectInfoComponent,
    ProjectBoardComponent,
    ProjectIssueTypeComponent,
    ProjectUsersComponent
  ],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule,
    MatSidenavModule,
    RouterModule,
    MainLayoutRoutingModule,
    MatPaginatorModule
    ],
})
export class ProjectSettingModule { }
