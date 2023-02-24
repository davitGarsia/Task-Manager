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

@NgModule({
  declarations: [MainLayoutComponent, ProjectsComponent, BoardsComponent, BoardComponent, ],
  imports: [CommonModule, MatSidenavModule, RouterModule, MainLayoutRoutingModule, MatPaginatorModule],
})
export class MainLayoutModule {}
