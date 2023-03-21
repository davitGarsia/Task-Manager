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
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { UserEditComponent } from './project-users/user-edit.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";



@NgModule({
    declarations: [
        ProjectSettingComponent,
        ProjectInfoComponent,
        ProjectBoardComponent,
        ProjectIssueTypeComponent,
        ProjectUsersComponent,
        DescriptionComponent,
        BoardEditComponent,
        UserEditComponent,

    ],
    exports: [
        BoardEditComponent
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
        MatDialogModule,
        NgxSkeletonLoaderModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatBadgeModule,
    ]
})
export class ProjectSettingModule {
}
