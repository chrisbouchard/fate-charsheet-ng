import { action, props, union } from 'ts-action';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Skill } from '../model/skill';


export const CloseCharacter =
    action('CLOSE_CHARACTER', props<{ id: string }>());

export const OpenCharacter =
    action('OPEN_CHARACTER', props<{ id: string }>());

export const SelectCharacter =
    action('SELECT_CHARACTER', props<{ id: string }>());

export const SetCharacterStress =
    action('SET_CHARACTER_STRESS', props<{ track: number, index: number, value: boolean }>());


export const CharacterLoadingStarted =
    action('CHARACTER_LOADING_STARTED', props<{ id: string }>());

export const CharacterLoadingSuccess =
    action('CHARACTER_LOADING_SUCCESS', props<{ id: string, character: Character }>());

export const CharacterLoadingFailure =
    action('CHARACTER_LOADING_FAILURE', props<{ id: string, error: any }>());


export const ClearAspects =
    action('CLEAR_ASPECTS');

export const ClearSkills =
    action('CLEAR_SKILLS');

export const ToggleAspect =
    action('TOGGLE_ASPECT', props<{ aspect: Aspect }>());

export const ToggleSkill =
    action('TOGGLE_SKILL', props<{ skill: Skill }>());


export const CharacterActions =
    union(
        CloseCharacter,
        OpenCharacter,
        SelectCharacter,
        SetCharacterStress,

        CharacterLoadingStarted,
        CharacterLoadingSuccess,
        CharacterLoadingFailure,

        ClearAspects,
        ClearSkills,
        ToggleAspect,
        ToggleSkill
    );
