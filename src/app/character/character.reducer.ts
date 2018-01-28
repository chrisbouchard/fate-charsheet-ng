import { set } from 'monolite';

import { Character } from '../model/character';

import { CharacterActions, SelectCharacter, SetCharacterStress } from './character.actions';
import { CharacterState, DEFAULT_CHARACTER_STATE, openAdapter } from './character.state';

export function characterReducer(state: CharacterState = DEFAULT_CHARACTER_STATE,
                                 action: typeof CharacterActions): CharacterState {
    const activeCharacter: Character | undefined =
        state.activeCharacter;

    switch (action.type) {

        case SelectCharacter.type:
            return set(state, _ => _.activeId)(action.id);

        case SetCharacterStress.type:
            if (!activeCharacter) {
                return state;
            }

            return set(state, _ => _.open)(
                openCharacters =>
                    openAdapter.updateOne({
                        id: activeCharacter.id,
                        changes: {
                            stressTracks:
                                set(activeCharacter.stressTracks, _ => _[action.track].boxes[action.index])(
                                    action.value
                                )
                        }
                    }, openCharacters)
            );

        default:
            return state;

    }
}
