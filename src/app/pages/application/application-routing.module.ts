import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from "./application.component";
import {AuthGuard} from "../../core/guards";
import {ProjectComponent} from "./project/project.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";
import {ProjectSettingComponent} from "./project-setting/project-setting.component";
import {ProjectBoardComponent} from "./project-setting/project-board/project-board.component";
import {ProjectIssueTypeComponent} from "./project-setting/project-issue-type/project-issue-type.component";
import {ProjectUsersComponent} from "./project-setting/project-users/project-users.component";

const routes: Routes = [

  {
    path: '',
    component: ApplicationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'project',
        canActivate: [AuthGuard],
        component: ProjectComponent
      },
      {
        path: 'edit/:id',
        component: ProjectEditComponent
      },
      {
        path: 'setting',
        loadChildren: () => import('./project-setting/project-setting.module').then(m => m.ProjectSettingModule)
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
}
