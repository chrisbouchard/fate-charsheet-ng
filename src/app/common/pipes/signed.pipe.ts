import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'signed',
    pure: true
})
export class SignedPipe implements PipeTransform {

    transform(value: number): string | undefined {
        if (value === undefined) {
            return undefined;
        }

        const prefix = (value < 0) ? '' : '+';
        return prefix + value;
    }

}
