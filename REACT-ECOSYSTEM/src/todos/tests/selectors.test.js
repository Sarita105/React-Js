import {expect} from 'chai';
import {getCompleteTodos} from '../selectors';

describe('getCompleteTodos selector', () => {
    it('describes getCompleteTodos', () => {
        const fakeTodos = [{
            text: 'say hello',
            isCompleted: true,
        }, {
            text: 'say goodbye',
            isCompleted: false,
        }, {
            text: 'mount everest',
            isCompleted: false,
        }];
        const expected = [{
            text: 'say hello',
            isCompleted: true,
        }];
        const actual = getCompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    });
});