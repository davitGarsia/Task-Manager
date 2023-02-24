import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import {BoardsComponent} from "./boards/boards.component";
import {ProjectsComponent} from "./projects/projects.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: MainLayoutComponent,
  },
  // {
  //   path: 'boards',
  //   component: BoardsComponent
  // },
  {
    path: 'boards/:id',
    component: BoardsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
