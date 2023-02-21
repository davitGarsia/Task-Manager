import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainLayoutRoutingModule} from "./main-layout-routing.module";
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from './projects/projects.component';
import { BoardsComponent } from './boards/boards.component';

@NgModule({
  declarations: [MainLayoutComponent, ProjectsComponent, BoardsComponent, ],
  imports: [CommonModule, MatSidenavModule, RouterModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
