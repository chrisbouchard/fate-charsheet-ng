import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ladderAdjective',
    pure: true
})
export class LadderAdjectivePipe implements PipeTransform {

    adjectiveLadder: Map<number, string> = new Map([
        [-2, 'Terrible'],
        [-1, 'Poor'],
        [+0, 'Mediocre'],
        [+1, 'Average'],
        [+2, 'Fair'],
        [+3, 'Good'],
        [+4, 'Great'],
        [+5, 'Superb'],
        [+6, 'Fantastic'],
        [+7, 'Epic'],
        [+8, 'Legendary']
    ]);

    transform(rank: number): string {
        if (rank === undefined) {
            return undefined;
        }

        return this.adjectiveLadder.get(rank);
    }

}
