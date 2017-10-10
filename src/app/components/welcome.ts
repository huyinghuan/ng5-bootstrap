import { Component } from '@angular/core';

let template:string = 
`
  <div style="text-align:center">
  <h2>
    Welcome!!
  </h2>
  </div>
`

@Component({
  selector: 'welcome',
  template: template
})
export class WelcomeComponent {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
