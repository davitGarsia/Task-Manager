import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {CreateBoardComponent} from "../stepper/create-board/create-board.component";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
      {
        path: 'projects',
        component: MainLayoutComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
