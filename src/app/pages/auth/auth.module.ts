import { NgModule } from '@angular/core';


import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [

    AuthRoutingModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
