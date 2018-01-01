import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CharacterRoutingModule } from './character-routing.module';
import { characterReducer } from './character.reducer';


@NgModule({
    imports: [
        CommonModule,
        CharacterRoutingModule,
        StoreModule.forFeature('character', characterReducer)
    ],
    declarations: []
})
export class CharacterModule {}
