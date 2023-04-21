import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./stepper.component";


import {AuthGuard} from "../../core/guards/auth.guard";


const routes: Routes = [
  {
    path: 'stepper',
    canActivate: [AuthGuard],
    component: StepperComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepperRoutingModule {}
