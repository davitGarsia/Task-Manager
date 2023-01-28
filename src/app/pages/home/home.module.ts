import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BoardsComponent } from './main-layout/boards/boards.component';
import { IndividualBoardComponent } from './main-layout/individual-board/individual-board.component';
import { CreateBoardComponent } from './main-layout/create-board/create-board.component';

@NgModule({
  declarations: [HomeComponent, MainLayoutComponent, BoardsComponent, IndividualBoardComponent, CreateBoardComponent],
  imports: [CommonModule, HomeRoutingModule, MatSidenavModule],
})
export class HomeModule {}
