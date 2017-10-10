import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http'
import {WelcomeComponent} from './components/welcome';
import { LoginComponent } from './components/login';
import { IndexComponent } from './components/index';
import { API } from './services/API';

var router = RouterModule.forRoot([
  {path: "", redirectTo:"/welcome", pathMatch:"full"},
  {path: 'login',component: LoginComponent},
  {path: "welcome", component: WelcomeComponent}
])

@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule , HttpModule, router
  ],
  providers: [API],
  bootstrap: [IndexComponent]
})
export class AppModule { }
