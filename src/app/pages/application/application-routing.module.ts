import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationComponent} from "./application.component";
import {AuthGuard} from "../../core/guards";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ApplicationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
