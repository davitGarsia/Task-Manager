import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from "./application.component";
import {AuthGuard} from "../../core/guards";
import {ProjectComponent} from "./project/project.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";

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
