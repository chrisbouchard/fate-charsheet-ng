import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';
import { APP_ROUTES } from './app.routes';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTES),

        StoreModule.forRoot(appReducers),
        StoreRouterConnectingModule,
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),

        SuiModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
