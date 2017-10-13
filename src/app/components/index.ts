import { Component, OnInit } from '@angular/core';

let template:string = 
`
<div class="ui grid">
<div class="sixteen wide column">
  <div class="ui menu">
    <div class="header item"><i class="left delicious icon"></i>ss</div>
    <div class="header item"><a routerLink="/index" routerLinkActive="active">First Page</a></div>
    <div class="header item"><a [routerLink]="['second',1]" routerLinkActive="active">Second Page</a></div>
  </div>
  <div class="ui bottom attached segment pushable">
    <div class="pusher">
      <div class="ui basic segment">
      <router-outlet></router-outlet>
      </div>
      <div class="ui center aligned container copyright">copyright©apying.com</div>
    </div>
  </div>
`

@Component({
  selector: 'index-page',
  template: template
})
export class IndexComponent implements OnInit  {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
