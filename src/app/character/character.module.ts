import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SuiModule } from 'ng2-semantic-ui';

import { CommonModule } from '../common/common.module';

import { CharacterFacadeService } from './character-facade.service';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { characterReducer } from './character.reducer';
import { AspectComponent } from './character-sheet/aspect.component';
import { CharacterViewerComponent } from './character-viewer.component';
import { CharacterMenuComponent } from './character-menu/character-menu.component';
import { MenuItemComponent } from './character-menu/menu-item.component';


@NgModule({
    imports: [
        CommonModule,
        CharacterRoutingModule,
        StoreModule.forFeature('character', characterReducer),
        SuiModule
    ],
    declarations: [
        CharacterListComponent,
        CharacterSheetComponent,
        AspectComponent,
        CharacterViewerComponent,
        CharacterMenuComponent,
        MenuItemComponent
    ],
    providers: [
        CharacterFacadeService
    ]
})
export class CharacterModule {}
