import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'paciente',      component:PacienteComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
