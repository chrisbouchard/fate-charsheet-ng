import { FromOptions } from './from-options';

module Stunt {
    export interface Options {
        name: string;
        description: string;
    }
}

export class Stunt extends FromOptions<Stunt.Options>() {}
