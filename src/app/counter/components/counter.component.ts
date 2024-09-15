import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  template:`
 <h2>{{counter}}</h2>
<button (click)="increment(5)">+1</button>
<button (click)="decrement(4)">-1</button>
<button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  public counter=0
  increment(num:number){
      this.counter=this.counter+num
   }
    decrement(num:number){
        this.counter=this.counter-num
    }
    reset(){
        this.counter=0
    }
}
