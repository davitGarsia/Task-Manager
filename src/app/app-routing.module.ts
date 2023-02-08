import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//თუ მომხმარებელი ავტორიზირებულია ჰოუმ პეიჯის ნაცვლად პირდაპირ აპლიკაციაზე გადაამისამართებს
//თუ არა ჰოუმ პეიჯზე გაუშვებს სადაც იქნება ავტორიზაცია - რეგისტრაციის ლინკები
//ავტორიზაციის წარმატებით გავლის შემდეგ ამ ცვლადს შევცვლით
let isAuthorised = false;

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      isAuthorised
        ? import('./pages/application/application.module').then(
            (m) => m.ApplicationModule
          )
        : import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/stepper/stepper.module').then((m) => m.StepperModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
