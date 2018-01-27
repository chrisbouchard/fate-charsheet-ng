import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
    name: 'sorted',
    pure: true
})
export class SortedPipe implements PipeTransform {

    transform<T>(iterable: Iterable<T>, key?: keyof T, ascending: boolean = true): T[] | undefined {
        if (iterable === undefined) {
            return undefined;
        }

        const collection = [...iterable];
        const iteratees = key ? [key] : undefined;
        const orders = [ascending ? 'asc' : 'desc'];

        return orderBy(collection, iteratees, orders);
    }

}
