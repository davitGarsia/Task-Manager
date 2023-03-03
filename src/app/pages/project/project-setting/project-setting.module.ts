import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectEpicsComponent } from './containers/project-epics/project-epics.component';
import { ProjectEpicAddEditComponent } from './containers/project-epic-add-edit/project-epic-add-edit.component';
import { ProjectSettingComponent } from './project-setting.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ProjectEpicsComponent,
    ProjectEpicAddEditComponent,
    ProjectSettingComponent
  ],
    imports: [
        CommonModule,
        ProjectSettingRoutingModule,
        MatButtonModule,
      MatTableModule,
      MatDialogModule
    ]
})
export class ProjectSettingModule { }
