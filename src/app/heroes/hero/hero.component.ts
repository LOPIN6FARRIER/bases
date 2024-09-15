import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string = 'Windstorm';
public age:number = 25;

changeName():void {
const heroes = ['Superman', 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman', 'Wonderwoman'];
this.name = heroes[Math.floor(Math.random() * heroes.length)];
}
changeAge():void {
  this.age = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

}
get capitalize():string {
  return this.name.toUpperCase();
}
getHeroDescription():string {
  return `${this.name} is ${this.age} years old`;
}
reset():void {
  this.name = 'Windstorm';
  this.age = 25;
}
}
