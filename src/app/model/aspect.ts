import { AddsShifts } from './adds-shifts';
import { FromOptions } from './from-options';

module Aspect {
    export interface Options {
        label?: string;
        name: string;
    }
}

export class Aspect extends FromOptions<Aspect.Options>() implements AddsShifts {
    readonly shiftsAdded: number = 2;
}
