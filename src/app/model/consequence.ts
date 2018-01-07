import { FromOptions } from './from-options';

import { AddsShifts } from './adds-shifts';


module Consequence {
    export interface Options {
        label: string;
        name: string;
        rank: number;
    }
}

export class Consequence extends FromOptions<Consequence.Options>() implements AddsShifts {
    get shiftsAdded(): number {
        return this.rank;
    }
}
