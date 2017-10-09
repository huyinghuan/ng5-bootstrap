import { Component } from '@angular/core';
import { API } from '../services/API';

let template:string = 
`
  <div style="text-align:center">
  <h1>
    Welcome to Index
  </h1>
  </div>
`

@Component({
  template: template,
  providers:[API]
})
export class IndexComponent {
  constructor(private api:API){}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
