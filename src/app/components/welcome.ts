import { Component, OnInit } from '@angular/core';

let template:string = 
`
<div class="ui grid" id="container">
<div class="sixteen wide column">
  <div class="ui menu">
    <div class="header item"><i class="left delicious icon"></i>ss</div>
  </div>
  <div class="ui bottom attached segment pushable">
    <div class="pusher">
      <div class="ui basic segment">
        <div class="ui grid">
          <div class="fourteen wide column">
            <h3 class="ui dividing header">VPS管理</h3>
          </div>
          <div class="two wide column">
            <a class="blue mini ui button" href="/add-vps.html">
              <i class="add icon"></i>添加
            </a>
          </div>
        </div>
        <children-route></children-route>
      </div>
      <div class="ui center aligned container copyright">copyright©apying.com</div>
    </div>
  </div>
`

@Component({
  selector: 'welcome',
  template: template
})
export class WelcomeComponent implements OnInit  {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
