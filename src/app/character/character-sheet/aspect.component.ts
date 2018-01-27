import { Component, Input } from '@angular/core';

import { Aspect } from '../../model/aspect';

@Component({
  selector: 'fate-aspect',
  templateUrl: './aspect.component.html',
  styleUrls: ['./aspect.component.css']
})
export class AspectComponent {

    @Input()
    aspect: Aspect;

}
