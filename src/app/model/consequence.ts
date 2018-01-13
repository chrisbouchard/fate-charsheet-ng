import { Aspect } from './aspect';
import { FromOptions } from './from-options';


module Consequence {
    export interface Options {
        label: string;
        rank: number;
        aspect?: Aspect;
    }
}

export class Consequence extends FromOptions<Consequence.Options>() {}
