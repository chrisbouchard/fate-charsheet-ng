import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
    selector: 'fate-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    overlayOpen$: Observable<boolean> = of(false);
    sidebarOpen$: Observable<boolean> = of(false);

    // constructor(
    //     private store: Store<AppState>
    // ) {}

    // ngOnInit(): void {
    //     this.overlayOpen$ = this.store.select(state => state.uiState.overlayOpen$);
    //     this.sidebarOpen$ = this.store.select(state => state.uiState.sidebarOpen$);
    // }

    // onMenuClick(): void {
    //     this.store.dispatch(new ToggleSidebarAction());
    // }

    onMenuClick(): void { }

}

