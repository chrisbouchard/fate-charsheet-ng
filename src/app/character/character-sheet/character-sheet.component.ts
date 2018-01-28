import { Component, Input } from '@angular/core';

import { Character } from '../../model/character';

@Component({
    selector: 'fate-character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {

    @Input()
    character: Character;

}
