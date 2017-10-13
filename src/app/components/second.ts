import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
let template:string = 
`
<h2>Second</h2>
<div>
  <p>ID is {{params.id}}</p>
  <button (click)="test()">Test</button>
</div>
`

@Component({
  selector: 'second-route',
  template: template
})
export class SecondComponent implements OnInit  {
  params = {}
  constructor( private route: ActivatedRoute){}
  test(){
    console.log(this.params["id"])
  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{ 
      this.params = params
    })
  }
}
