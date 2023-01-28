import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HomeSignUpComponent } from './home-sign-up/home-sign-up.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    HomeComponent,
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
})
export class HomeModule { }
