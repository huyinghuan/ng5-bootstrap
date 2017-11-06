import { Component, OnInit } from '@angular/core';

let template:string = 
`
<h2>First1</h2>
`

@Component({
  selector: 'second-route',
  template: template
})
export class MainRoutePage implements OnInit  {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
