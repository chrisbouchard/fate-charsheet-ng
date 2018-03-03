import { set } from 'monolite';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Consequence } from '../model/consequence';
import { Player } from '../model/player';
import { Skill } from '../model/skill';
import { StressTrack } from '../model/stress-track';
import { Stunt } from '../model/stunt';

export class CharacterFacadeService {

    private mbouchard: Player = new Player({
        id: 'mbouchard',
        name: 'Mary Bouchard'
    });

    private jdoe: Player = new Player({
        id: 'jdoe',
        name: 'John Doe'
    });

    private amaryllis: Character = new Character({
        id: '1',
        name: 'Amaryllis Aster Jennings',
        player: this.mbouchard,
        portrait: '/assets/number-one.jpg',
        color: 'purple',

        aspects: [
            new Aspect({ label: 'High Concept', name: 'Graying Starfleet Devil' }),
            new Aspect({ label: 'Trouble', name: 'Number One' }),
            new Aspect({ label: 'Rank', name: 'Captain' }),
            new Aspect({ name: 'To Boldly Go' }),
            new Aspect({ name: 'Warp Core on Legs' }),
            new Aspect({ name: 'Glint in the Eye' }),
            new Aspect({ name: `I've Got a Grenade!`, boost: true }),
            new Aspect({ name: `Test Boost with One Invoke`, boost: true, freeInvokes: 1 }),
            new Aspect({ name: `Test Boost with Invokes`, boost: true, freeInvokes: 3 }),
        ],

        skills: new Set([
            new Skill({ name: 'Athletics', rank: 1 }),
            new Skill({ name: 'Burglary', rank: 1 }),
            new Skill({ name: 'Contacts', rank: 1 }),
            new Skill({ name: 'Crafts', rank: 1 }),
            new Skill({ name: 'Deceive', rank: 1 }),
            new Skill({ name: 'Drive', rank: 1 }),
            new Skill({ name: 'Empathy', rank: 2 }),
            new Skill({ name: 'Fight', rank: 2 }),
            new Skill({ name: 'Investigate', rank: 2 }),
            new Skill({ name: 'Lore', rank: 2 }),
            new Skill({ name: 'Notice', rank: 3 }),
            new Skill({ name: 'Physique', rank: 3 }),
            new Skill({ name: 'Provoke', rank: 3 }),
            new Skill({ name: 'Rapport', rank: 4 }),
            new Skill({ name: 'Resources', rank: 4 })
        ]),

        stunts: [
            new Stunt({
                name: 'Test Stunt',
                description: 'A stunt that tests stuff. Lorem ipsum blah blah blah. Lots of text.'
            }),
            new Stunt({ name: 'A B C', description: 'Foo bar.' }),
            new Stunt({ name: 'X Y Z', description: 'Foo bar.' })
        ],

        stressTracks: [
            new StressTrack({
                name: 'Physical',
                boxes: [true, true, false, false]
            }),
            new StressTrack({
                name: 'Mental',
                boxes: [false, false]
            })
        ],

        consequences: [
            new Consequence({
                aspect: new Aspect({
                    name: 'Shaken, Not Stirred',
                }),
                label: 'Mild',
                rank: 2
            }),
            new Consequence({
                label: 'Moderate',
                rank: 4
            }),
            new Consequence({
                label: 'Severe',
                rank: 6
            })
        ]
    });

    private fooBar: Character = new Character({
        id: '1',
        name: 'Foo Bar',
        player: this.jdoe,
        portrait: '/assets/placeholder.svg',
        color: 'blue',

        aspects: [
            new Aspect({ label: 'High Concept', name: 'Lorem Ipsum Dolor Sit Amen' }),
            new Aspect({ label: 'Trouble', name: 'Troubling Troubles' })
        ],

        skills: new Set(),
        stunts: [],

        stressTracks: [
            new StressTrack({
                name: 'Physical',
                boxes: [true, true, false, false]
            }),
            new StressTrack({
                name: 'Mental',
                boxes: [false, false]
            })
        ],

        consequences: []
    });

    private fixedCharacters: Character[] = [this.amaryllis];

    find(id: string): Observable<Character> {
        return of(set(this.amaryllis, _ => _.id)(id))
            .pipe(delay(5));
    }

    findAll(): Observable<Character[]> {
        const characters = Array.from({ length: 4 }, () => this.fooBar);
        const charactersWithIds =
            this.fixedCharacters.concat(characters)
                .map((character, index) => set(character, _ => _.id)(String(index)));
        return of(charactersWithIds);
    }

}
