import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http'
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './components/app';
import { IndexComponent } from './components/index';
import { LoginComponent } from './components/login';

//====== 二层页面

import {FirstComponent} from './components/first'
import {SecondComponent} from './components/second'

import { API } from './services/API';

var router = RouterModule.forRoot([
  {path: "", redirectTo:"/index", pathMatch:"full"},
  {path: 'login',component: LoginComponent},
  { path: "index",
    component: IndexComponent,
    children: [{
      path:"",
      component: FirstComponent
    },{
      path:"second/:id",
      component: SecondComponent
    }]
  }
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule , HttpModule, FormsModule, router
  ],
  providers: [API],
  bootstrap: [AppComponent]
})
export class AppModule { }
