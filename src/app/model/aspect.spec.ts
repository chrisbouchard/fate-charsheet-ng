import { Aspect } from './aspect';

describe('Aspect', () => {
    it('has its name given in the constructor', () => {
        const aspect = new Aspect({ name: 'test' });
        expect(aspect.name).toEqual('test');
    });
});
