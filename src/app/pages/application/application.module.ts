import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApplicationComponent} from "./application.component";
import {ApplicationRoutingModule} from "./application-routing.module";
import { ProjectComponent } from './project/project.component';
import {HomeModule} from "../home/home.module";
import {FormsModule} from "@angular/forms";
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    ProjectComponent,
    SideMenuComponent
  ],
    imports: [
        CommonModule,
        ApplicationRoutingModule,
        HomeModule,
        FormsModule
    ]
})
export class ApplicationModule { }
