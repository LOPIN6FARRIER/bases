import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroes:string[]= ['Superman', 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman', 'Wonderwoman'];
public deletesHeroes:string[] = [];

removeFirstHero():void{
  const hero = this.heroes.shift();
  this.deletesHeroes.push(hero? hero : '');
}
}
