import { FromOptions } from './from-options';

import { AddsShifts } from './adds-shifts';


module EmptyConsequence {
    export interface Options {
        label: string;
        rank: number;
    }
}

export class EmptyConsequence extends FromOptions<EmptyConsequence.Options>() implements AddsShifts {
    readonly empty = true;

    get shiftsAdded(): number {
        return this.rank;
    }
}


module FullConsequence {
    export interface Options {
        label: string;
        rank: number;
        name: string;
    }
}

export class FullConsequence extends FromOptions<FullConsequence.Options>() implements AddsShifts {
    readonly empty = false;

    get shiftsAdded(): number {
        return this.rank;
    }
}

export type Consequence = EmptyConsequence | FullConsequence;
