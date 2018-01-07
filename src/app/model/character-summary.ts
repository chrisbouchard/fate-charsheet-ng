import { FromOptions } from './from-options';

import { Player } from './player';

export module CharacterSummary {
    export interface Options {
        id: string;
        name: string;
        player: Player;

        color: string;
        portrait: string;
    }
}

export class CharacterSummary extends FromOptions<CharacterSummary.Options>() {}
