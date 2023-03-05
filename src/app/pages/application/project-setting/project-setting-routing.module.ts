import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectSettingComponent} from "./project-setting.component";
import {ProjectBoardComponent} from "./project-board/project-board.component";
import {ProjectIssueTypeComponent} from "./project-issue-type/project-issue-type.component";
import {ProjectUsersComponent} from "./project-users/project-users.component";
import {ProjectInfoComponent} from "./project-info/project-info.component";
import {ProjectEditComponent} from "../project-edit/project-edit.component";
import {DescriptionComponent} from "./project-info/description.component";
import {BoardEditComponent} from "./project-board/board-edit/board-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectSettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component:ProjectInfoComponent
      },
      {
        path: 'board',
        children:[
          {
          path: '',
          component: ProjectBoardComponent
        },
          {
            path: 'editBoard/:id',
            component: BoardEditComponent
          }
        ]

      },
      {
        path: 'issueType',
        component: ProjectIssueTypeComponent
      },
      {
        path: 'edit/:id',
        component: ProjectEditComponent
      },
      {
        path: 'users',
        component: ProjectUsersComponent
      },

      {
        path: 'description/:id',
        component: DescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectSettingRoutingModule { }
