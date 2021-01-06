import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }

  public getWines() {
    return [{
      name: 'test wine name one',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }, {
      name: 'test wine name two',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }, {
      name: 'test wine name three',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }, {
      name: 'test wine name four',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }, {
      name: 'test wine name five',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }, {
      name: 'test wine name six',
      variety: 'red blend',
      vintage: '2013',
      price: '12',
      description: 'great wine description here, it tastes really good. mmmm...',
      imgUrl: ''
    }];
  }
}
