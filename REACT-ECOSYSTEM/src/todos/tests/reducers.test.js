import {expect} from 'chai';
import {todos} from '../reducers';

describe('todos reducer', () => {
  it('adds todo when CREATE_TODO action is received', () => {
      const fakeTodo = {text: 'hello', isCompleted: false};
      const fakeAction = {
        type: 'CREATE_TODO',
        payload: {
            todo: fakeTodo,
        }
      }
      const original = {isLoading: false, data:[]};
      const expected = {
          isLoading: false,
          data:[fakeTodo]
      }
      const actual = todos(original,fakeAction )
      expect(actual).to.deep.equal(expected);
  })
});