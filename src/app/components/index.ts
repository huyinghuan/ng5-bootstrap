import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { API } from '../services/API';

let template = `
<a routerLink="/login">login</a>
<router-outlet></router-outlet>
`

@Component({
  selector: 'app-root',
  template: template,
  providers:[API]
})
export class IndexComponent {
  constructor(private api:API, private location: Location){}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.api.post("/api/login", {name:"admin", password:"~admin"})
  }
}
