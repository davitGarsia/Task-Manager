import { NgModule } from '@angular/core';


import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "../home/home.module";
import {NgIf} from "@angular/common";




@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
         RegisterComponent
    ],
  exports: [

    LoginComponent
  ],
  imports: [

    AuthRoutingModule,
    ReactiveFormsModule,
    NgIf,
  ]
})
export class AuthModule { }
