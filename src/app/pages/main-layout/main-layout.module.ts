import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainLayoutRoutingModule} from "./main-layout-routing.module";
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from './projects/projects.component';
import { BoardsComponent } from './boards/boards.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { BoardComponent } from './board/board.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [MainLayoutComponent, ProjectsComponent, BoardsComponent, BoardComponent, ],
  imports: [CommonModule,
    MatSidenavModule,
    RouterModule,
    MainLayoutRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class MainLayoutModule {}
