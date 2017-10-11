import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { API } from '../services/API';

let template = `
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
      </div>
      <div class="ui center aligned container copyright">copyright©apying.com</div>
    </div>
  </div>
`

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  providers:[API]
})
export class IndexComponent{}

