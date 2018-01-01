import { FromOptions } from '../common/options';
import { AddsShifts } from './adds-shifts';

module Aspect {
    export interface Options {
        label?: string;
        name: string;
    }
}

export class Aspect extends FromOptions<Aspect.Options>() implements AddsShifts {
    readonly shiftsAdded: number = 2;
}
