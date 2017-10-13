import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import {ISubscription} from 'rxjs/Subscription'
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
export class SecondComponent implements OnInit, OnDestroy {
  private subscriptQueryParams:ISubscription
  private subscriptParams:ISubscription
  params = {}
  constructor( private route: ActivatedRoute){}
  test(){
    console.log(this.params)
  }
  ngOnInit() {
    /** 
     * 非箭头函数 this 指向 function内部,无法使用this.params指向外部
    this.route.params.subscribe(function(params){ 
      this.params = params
    })
    */
    this.subscriptQueryParams = this.route.queryParams.subscribe((params)=>{
      Object.assign(this.params, params)
    })
    this.subscriptParams = this.route.params.subscribe((params)=>{
      Object.assign(this.params, params)
    })
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptQueryParams.unsubscribe()
    this.subscriptParams.unsubscribe()
  }
}
