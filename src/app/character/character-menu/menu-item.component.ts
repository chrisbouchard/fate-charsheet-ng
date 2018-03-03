import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';

import { Character } from '../../model/character';

@Component({
    selector: 'fate-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    animations: [
        trigger('coverStateChanged', [
            state('default', style({
                'transform': `translate(0)`
            })),
            state('hovered', style({
                'transform': `translateX(-60px)`
            })),
            transition('default <=> hovered', animate('250ms'))
        ]),
        trigger('imageStateChanged', [
            state('default', style({
                'transform': `translate(25px)`
            })),
            state('hovered', style({
                'transform': `translateX(0)`
            })),
            transition('default <=> hovered', animate('250ms'))
        ])
    ]
})
export class MenuItemComponent {

    @Input() active!: boolean;
    @Input() character!: Character;

    hovered: boolean = false;

    get state(): string {
        if (this.active || this.hovered) {
            return 'hovered';
        }

        return 'default';
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.hovered = true;
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.hovered = false;
    }

}
