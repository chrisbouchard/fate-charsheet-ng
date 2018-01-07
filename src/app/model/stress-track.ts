import { FromOptions } from './from-options';

module StressTrack {
    export interface Options {
        name: string;
        boxes: boolean[];
    }
}

export class StressTrack extends FromOptions<StressTrack.Options>() {}
