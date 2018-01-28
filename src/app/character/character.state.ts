import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Character } from '../model/character';
import { FromOptions } from '../model/from-options';


export const openAdapter: EntityAdapter<Character> =
    createEntityAdapter<Character>({
        selectId: character => character.id
    });

const { selectEntities } = openAdapter.getSelectors();

export module CharacterState {
    export interface Options {
        activeId: string | undefined;
        open: EntityState<Character>;
    }
}

export class CharacterState extends FromOptions<CharacterState.Options>() {

    get activeCharacter(): Character | undefined {
        if (this.activeId === undefined) {
            return undefined;
        }

        return selectEntities(this.open)[this.activeId];
    }

}

export const DEFAULT_CHARACTER_STATE: CharacterState = new CharacterState({
    activeId: undefined,
    open: openAdapter.getInitialState()
});
