import { FromOptions } from './from-options';

module StressTrackSlot {
    export interface Options {
        field: string;
        cap: number;
    }
}

export class StressTrackSlot extends FromOptions<StressTrackSlot.Options>() {}


module Template {
    export interface Options {
        id: string;
        name: string;

        aspectNames: Map<string, string>;
        consequenceNames: Map<string, string>;
        stressTrackNames: Map<string, string>;

        aspectSlots: string[];
        consequenceSlots: string[];
        stressTrackSlots: StressTrackSlot[];
    }
}

export class Template extends FromOptions<Template.Options>() {}
