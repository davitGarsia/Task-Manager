import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {PageNotFoundComponent} from './pages/404-error/page-not-found/page-not-found.component';
import {ProjectInterceptor} from './core/interceptors/project.interceptor';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NextButtonDirective } from './core/directives/next-button.directive';
import {MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS} from "@angular-material-components/color-picker";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // HomeModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
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

        {
            provide: HTTP_INTERCEPTORS,
            useClass: ProjectInterceptor,
            multi: true
        },
      { provide: MAT_COLOR_FORMATS,
        useValue: NGX_MAT_COLOR_FORMATS }

    ],
    bootstrap: [AppComponent],


})

export class AppModule {
}
