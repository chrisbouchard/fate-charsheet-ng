import { groupToMap } from '../util/collections';
import { FromOptions } from './from-options';

import { Aspect } from './aspect';
import { Consequence } from './consequence';
import { Player } from './player';
import { Skill } from './skill';
import { StressTrack } from './stress-track';
import { Stunt } from './stunt';

export module Character {
    export interface Options {
        id: string;
        name: string;
        player: Player;

        color: string;
        portrait: string;

        aspects: Aspect[];
        skills: Set<Skill>;
        stunts: Stunt[];

        stressTracks: StressTrack[];
        consequences: Consequence[];
    }
}

export class Character extends FromOptions<Character.Options>() {
    get highConcept(): Aspect {
        return this.aspects[0];
    }

    get skillsByRank(): Map<number, Skill[]> {
        return groupToMap(this.skills, skill => skill.rank);
    }
}
