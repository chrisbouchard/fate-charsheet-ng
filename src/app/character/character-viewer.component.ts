import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character } from '../model/character';

import { CharacterFacadeService } from './character-facade.service';

@Component({
  selector: 'fate-character-viewer',
  templateUrl: './character-viewer.component.html',
  styleUrls: ['./character-viewer.component.css']
})
export class CharacterViewerComponent implements OnInit {

    character$: Observable<Character>;

    constructor(
        private characterFacade: CharacterFacadeService
    ) {}

    ngOnInit(): void {
        this.character$ = this.characterFacade.find('1');
    }

}
