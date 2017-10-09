import { Component } from '@angular/core';
import { API } from '../services/API';

let template:string = 
`
  <div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>
  <div>
    <ul>
      <li *ngFor="let i of list;index as index;">{{index}}-{{i}}</li>
    </ul>
  </div>
  </div>
`

@Component({
  selector: 'app-root',
  template: template,
  providers:[API]
  //styleUrls: ['./first.css']
})
export class LoginComponent {
  title = 'app';
  list:number[] = [];
  constructor(private api:API){}
  getList():void{
    this.api.get().then(list => this.list = list)
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getList()
  }
}
