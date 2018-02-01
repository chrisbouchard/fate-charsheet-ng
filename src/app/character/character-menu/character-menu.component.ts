import { Component, Input } from '@angular/core';

import { Character } from '../../model/character';

@Component({
  selector: 'fate-character-menu',
  templateUrl: './character-menu.component.html',
  styleUrls: ['./character-menu.component.css']
})
export class CharacterMenuComponent {

    @Input() characters!: Character[];

}
