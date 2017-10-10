import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class API {
  constructor(private http:Http){}
  fetch(url, data, method="GET"){
    let options:RequestOptionsArgs=  {
      method:method,
      body: data
    }
    if(method!="GET"){
      let header = new Headers()
      header.set("Content-type", "application/x-www-form-urlencoded")
      options.headers = header
    }
    return this.http.request(url,options).toPromise()
  }
  get(url:string, data:any){
    this.fetch(url, data).then((...args)=>{console.log(args)})
  }
  post(url:string, data:any){
    this.fetch(url, data, "POST").then((...args)=>{console.log(args)})
  }
}