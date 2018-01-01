import { FromOptions } from '../common/options';

module Player {
    export interface Options {
        id: string;
        name: string;
    }
}

export class Player extends FromOptions<Player.Options>() {}
