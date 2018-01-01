import { set } from 'monolite';

import { CharacterActions, SelectCharacter, SetCharacterStress } from './character.actions';
import { CharacterState, DEFAULT_CHARACTER_STATE, openAdapter } from './character.state';

export function characterReducer(
    state: CharacterState = DEFAULT_CHARACTER_STATE,
    action: typeof CharacterActions
): CharacterState {
    switch (action.type) {

        case SelectCharacter.type: {
            return set(state, _ => _.activeId)(action.id);
        }

        case SetCharacterStress.type:
            return set(state, _ => _.open)(
                openCharacters =>
                    openAdapter.updateOne({
                            id: state.activeId,
                            changes: {
                                stressTracks:
                                    set(state.activeCharacter.stressTracks, _ => _[action.track].boxes[action.index])(
                                        action.value
                                    )
                            }
                        },
                        openCharacters
                    )
            );

        default:
            return state;

    }
}
