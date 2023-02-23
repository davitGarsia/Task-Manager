import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectSettingComponent} from "./project-setting.component";
import {ProjectBoardComponent} from "./project-board/project-board.component";
import {ProjectIssueTypeComponent} from "./project-issue-type/project-issue-type.component";
import {ProjectUsersComponent} from "./project-users/project-users.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectSettingComponent,
    children: [
      {
        path: 'board',
        component: ProjectBoardComponent
      },
      {
        path: 'issueType',
        component: ProjectIssueTypeComponent
      },
      {
        path: 'users',
        component: ProjectUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectSettingRoutingModule { }
