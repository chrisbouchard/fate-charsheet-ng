import { CommonModule as AngularCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EntriesPipe } from './pipes/entries.pipe';
import { SortedPipe } from './pipes/sorted.pipe';
import { SignedPipe } from './pipes/signed.pipe';
import { LadderAdjectivePipe } from './pipes/ladder-adjective.pipe';

@NgModule({
    imports: [
        AngularCommonModule
    ],
    declarations: [
        EntriesPipe,
        SortedPipe,
        SignedPipe,
        LadderAdjectivePipe
    ],
    exports: [
        AngularCommonModule,
        EntriesPipe,
        SortedPipe,
        SignedPipe,
        LadderAdjectivePipe
    ]
})
export class CommonModule {
}
