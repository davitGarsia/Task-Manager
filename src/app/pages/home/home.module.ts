import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
<<<<<<< Updated upstream
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HomeSignUpComponent } from './home-sign-up/home-sign-up.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
=======
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {AuthModule} from "../auth/auth.module";
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    HomeComponent,
<<<<<<< Updated upstream
    NavigationComponent,
    HeaderComponent,
    HomeSignUpComponent,
    AboutProjectComponent,
    ScrollToTopComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule
    ]
=======
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    AuthModule
  ],
  exports: [
    HomeComponent,
  ]
>>>>>>> Stashed changes
})
export class HomeModule { }
