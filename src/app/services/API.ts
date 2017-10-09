import { Injectable } from '@angular/core';

@Injectable()
export class API {
  get(): Promise<number[]> {
    return Promise.resolve([1,2,3,4,5]);
  }
}