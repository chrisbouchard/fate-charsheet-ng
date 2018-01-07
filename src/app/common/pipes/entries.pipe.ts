import { Pipe, PipeTransform } from '@angular/core';

import { EntryPair } from '../../model/entry-pair';

@Pipe({
    name: 'entries',
    pure: true
})
export class EntriesPipe implements PipeTransform {

    transform(obj: object): EntryPair[] {
        if (obj === undefined) {
            return undefined;
        }

        if (obj instanceof Map) {
            return [...obj.entries()].map(([key, value]) => ({ key, value }));
        }

        return Object.entries(obj).map(([key, value]) => ({ key, value }));
    }

}
