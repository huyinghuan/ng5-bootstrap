import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http'
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './components/app';
import { IndexPage } from './page/index';
import { LoginComponent } from './components/login';

//====== 二层页面

import {MainRoutePage} from './page/main-route'

import { API } from './services/API';

var router = RouterModule.forRoot([
  {path: "", redirectTo:"/index", pathMatch:"full"},
  {path: 'login',component: LoginComponent},
  { path: "index",
    component: IndexPage
  }
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexPage,
    MainRoutePage,
  ],
  imports: [
    BrowserModule , HttpModule, FormsModule, router
  ],
  providers: [API],
  bootstrap: [AppComponent]
})
export class AppModule { }
