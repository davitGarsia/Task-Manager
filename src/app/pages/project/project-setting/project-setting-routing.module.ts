import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectSettingComponent} from "./project-setting.component";
import {ProjectEpicsComponent} from "./containers/project-epics/project-epics.component";
import {ProjectEpicAddEditComponent} from "./containers/project-epic-add-edit/project-epic-add-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectSettingComponent,
  },
  {
    path: 'epics',
    children: [
      {
        path: '',
        component: ProjectEpicsComponent
      },
      {
        path: 'add',
        component: ProjectEpicAddEditComponent
      },
      {
        path: 'edit/:id',
        component: ProjectEpicAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectSettingRoutingModule { }