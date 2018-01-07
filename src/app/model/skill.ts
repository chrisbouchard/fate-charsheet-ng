import { FromOptions } from './from-options';

import { AddsShifts } from './adds-shifts';

module Skill {
    export interface Options {
        name: string;
        rank: number;
    }
}

export class Skill extends FromOptions<Skill.Options>() implements AddsShifts {
    get shiftsAdded(): number {
        return this.rank;
    }
}
