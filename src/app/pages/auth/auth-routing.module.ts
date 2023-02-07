import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


// შევამოწმოთ თუ უკვე რეგისტრირებულია მეილი ავტორიზაციაზე გავუშვებთ, თუ არა
// რეგისტრაციაზე. მთავარ გვერდზე შეყვანილი მეილი ავტომატურად ჩაიწერება auth მეილის ველში

let isRegistered: boolean = true;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: isRegistered ? 'login' : 'register',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
