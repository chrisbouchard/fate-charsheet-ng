import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { FromOptions } from '../common/options';
import { Character } from '../model/character';


export const openAdapter: EntityAdapter<Character> =
    createEntityAdapter<Character>({
        selectId: character => character.id
    });

export module CharacterState {
    export interface Options {
        activeId: string;
        open: EntityState<Character>;
    }
}

export class CharacterState extends FromOptions<CharacterState.Options>() {

    get activeCharacter(): Character {
        if (this.activeId === undefined) {
            return undefined;
        }

        return this.open.entities[this.activeId];
    }

}

export const DEFAULT_CHARACTER_STATE: CharacterState = new CharacterState({
    activeId: undefined,
    open: openAdapter.getInitialState()
});
