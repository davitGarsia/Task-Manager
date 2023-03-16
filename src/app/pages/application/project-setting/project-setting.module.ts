import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectSettingRoutingModule} from './project-setting-routing.module';
import {ProjectInfoComponent} from './project-info/project-info.component';
import {ProjectBoardComponent} from './project-board/project-board.component';
import {ProjectIssueTypeComponent} from './project-issue-type/project-issue-type.component';
import {ProjectUsersComponent} from './project-users/project-users.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MainLayoutRoutingModule} from "../../main-layout/main-layout-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProjectSettingComponent} from "./project-setting.component";
import {DescriptionComponent} from './project-info/description.component';
import {BoardEditComponent} from './project-board/board-edit/board-edit.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ApplicationModule} from "../application.module";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { UserEditComponent } from '../../user/user-add-edit/user-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDividerModule} from "@angular/material/divider";
import {UserModule} from "../../user/user.module";
import {CdkDrag, CdkDropList, DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    ProjectSettingComponent,
    ProjectInfoComponent,
    ProjectBoardComponent,
    ProjectIssueTypeComponent,
    ProjectUsersComponent,
    DescriptionComponent,
    BoardEditComponent,

  ],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule,
    MatSidenavModule,
    RouterModule,
    MainLayoutRoutingModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    ApplicationModule,
    MatDialogModule,
    FontAwesomeModule,
    MatDividerModule,
    UserModule,
    DragDropModule,

  ],
})
export class ProjectSettingModule {
}
