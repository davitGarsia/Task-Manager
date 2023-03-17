import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {HomeModule} from "../home/home.module";
import {FormsModule} from "@angular/forms";
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HomeModule,
        FormsModule
    ]
})
export class DashboardModule { }
