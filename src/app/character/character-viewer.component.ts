import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character } from '../model/character';

import { CharacterFacadeService } from './character-facade.service';

@Component({
  selector: 'fate-character-viewer',
  templateUrl: './character-viewer.component.html',
  styleUrls: ['./character-viewer.component.css']
})
export class CharacterViewerComponent {

    character$: Observable<Character>;
    characters$: Observable<Character[]>;

    constructor(
        private characterFacade: CharacterFacadeService
    ) {
        this.character$ = this.characterFacade.find('1');
        this.characters$ = this.characterFacade.findAll();
    }

}
