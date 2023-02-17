import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationComponent} from "./application.component";
import {AuthGuard} from "../../core/guards";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [

  {
    path:'',
    component: ApplicationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'project',
        canActivate: [AuthGuard],
        component: ProjectComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
