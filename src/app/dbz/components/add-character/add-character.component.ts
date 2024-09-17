import { Component, EventEmitter, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Output } from '@angular/core';
@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewChracter:EventEmitter<Character> = new EventEmitter()

  public characterToAdd: Character = {
    name: '',
    power: 1000,
    id: crypto.randomUUID()
  };

  onSubmit(): void {
    if(this.characterToAdd.name.trim().length === 0) return;
    if(this.characterToAdd.power <= 0) return;

    this.onNewChracter.emit(this.characterToAdd);
    this.characterToAdd = {
      name: '',
      power: 1000,
      id: crypto.randomUUID()
    };
  }
}
