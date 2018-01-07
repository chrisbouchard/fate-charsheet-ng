import { FromOptions } from './from-options';

module Player {
    export interface Options {
        id: string;
        name: string;
    }
}

export class Player extends FromOptions<Player.Options>() {}
