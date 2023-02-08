import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSignUpComponent } from './home-sign-up/home-sign-up.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { IndividualBoardComponent } from './main-layout/individual-board/individual-board.component';
import { CreateBoardComponent } from './main-layout/create-board/create-board.component';
import { SidenavFormComponent } from './main-layout/sidenav-form/sidenav-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//import {AuthInterceptor} from "../../core/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    HomeSignUpComponent,
    AboutProjectComponent,
    ScrollToTopComponent,
    HomeComponent,
    MainLayoutComponent,
    IndividualBoardComponent,
    CreateBoardComponent,
    SidenavFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
