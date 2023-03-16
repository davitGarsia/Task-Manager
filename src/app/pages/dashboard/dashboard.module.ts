import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {HomeModule} from "../home/home.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HomeModule,
        FormsModule
    ]
})
export class DashboardModule { }
