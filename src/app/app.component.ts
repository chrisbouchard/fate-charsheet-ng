import { Component } from '@angular/core';

@Component({
    selector: 'fate-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    // overlayOpen: Observable<boolean>;
    // sidebarOpen: Observable<boolean>;

    // constructor(
    //     private store: Store<AppState>
    // ) {}

    // ngOnInit(): void {
    //     this.overlayOpen = this.store.select(state => state.uiState.overlayOpen);
    //     this.sidebarOpen = this.store.select(state => state.uiState.sidebarOpen);
    // }

    // onMenuClick(): void {
    //     this.store.dispatch(new ToggleSidebarAction());
    // }

}

