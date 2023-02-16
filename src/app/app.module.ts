import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./pages/home/home.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {PageNotFoundComponent} from './pages/404-error/page-not-found/page-not-found.component';
import { ProjectInterceptor } from './core/interceptors/project.interceptor';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   // HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: Window,
      useValue: window
    },

    { provide: HTTP_INTERCEPTORS, useClass: ProjectInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
