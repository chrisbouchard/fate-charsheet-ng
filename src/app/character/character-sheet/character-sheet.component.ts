import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Aspect } from '../../model/aspect';
import { Character } from '../../model/character';

import { CharacterFacadeService } from '../character-facade.service';

@Component({
    selector: 'fate-character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

    character$: Observable<Character>;

    constructor(private characterFacade: CharacterFacadeService) {
    }

    ngOnInit(): void {
        this.character$ = this.characterFacade.find('1');
    }

}
