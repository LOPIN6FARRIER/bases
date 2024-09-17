import { Component, Input, output } from '@angular/core';
import { Character, uid } from '../../interfaces/character.interface';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
    selector: 'app-dbz-list',
    templateUrl: './listado.component.html',
    styleUrl: './listado.component.css',
})
export class ListadoComponent {
  @Input()
  public charactersFromMain: Character[] = []

  @Output()
  public onDeleteCharacter: EventEmitter<uid> = new EventEmitter();

  public onDelete(id:uid): void {
    this.onDeleteCharacter.emit(id);
  }
 }
