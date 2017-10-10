import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class API {
  constructor(private http:Http){}
  fetch(url, data, method?){
    let options =  {
      method:method || "GET",
      body: data
    }
    return this.http.request(url,options).toPromise()
  }
  get(url:string, data:any){
    this.fetch(url, data).then((...args)=>{console.log(args)})
  }
  post(url:string, data:any){
    this.fetch(url, JSON.stringify(data), "POST").then((...args)=>{console.log(args)})
  }
}