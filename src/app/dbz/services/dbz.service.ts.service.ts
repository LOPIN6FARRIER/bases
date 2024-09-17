import { Injectable } from '@angular/core';
import { Character,uid } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
      id:crypto.randomUUID()
    },
    {
      name: 'Vegeta',
      power: 7500,
      id:crypto.randomUUID()
    },
    {
      name: 'Trunks',
      power: 8000,
      id:crypto.randomUUID()
    },
    {
      name: 'Gohan',
      power: 12000,
      id:crypto.randomUUID()
    },
    {
      name: 'Piccolo',
      power: 8000,
      id:crypto.randomUUID()
    }
  ]

  onDeleteCharacter(id:uid): void {
    console.log('Deleting', id);
    this.characters = this.characters.filter(c => c.id !== id);
  }

  onNewChracter(character: Character): void {
    this.characters.push({
      name: character.name,
      power: character.power,
      id:crypto.randomUUID()
    })
  }

}
