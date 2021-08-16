
import {expect} from 'chai';
import {getRedBorder} from '../TodoListItem';

describe('test todolistitem getredBorder styled component', () => {
    it('tests getRedBorder none', () => {
        const today = Date.now();
        const recent = new Date(Date.now() - 864000*3);
        const expected = 'none';
        const actual = getRedBorder(recent, today);
        expect(actual).to.equal(expected);
    });
    it('tests getRedBorder red border', () => {
        const today = Date.now();
        const recent1 = new Date(Date.now() - 864000*9);
        const expected =  '2px solid red';
        const actual = getRedBorder(recent1, today);
        expect(actual).to.equal(expected);
    });
});