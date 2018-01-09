import { AddsShifts } from './adds-shifts';
import { FromOptions } from './from-options';

module Aspect {
    export interface Options {
        label?: string;
        name: string;
        boost?: boolean;
        freeInvokes?: number;
    }
}

export const DEFAULT_ASPECT_OPTIONS: Partial<Aspect.Options> = {
    boost: false,
    freeInvokes: 0
};

export class Aspect extends FromOptions<Aspect.Options>(DEFAULT_ASPECT_OPTIONS) implements AddsShifts {
    readonly shiftsAdded: number = 2;
}
