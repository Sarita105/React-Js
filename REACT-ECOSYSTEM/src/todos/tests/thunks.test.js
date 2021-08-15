import 'node-fetch';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';
import {loadTodos} from '../thunks';
import sinon from 'sinon';

describe('the loadtodos thunk',()=>{
    it('dispatches correct action when successful scenario', async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodos = [{text:'1'},{text:'2'}];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);
        const expectedFirstAction = {type: 'LOAD_TODOS_IN_PROGRESS'};
        const expectedSecondAction = {
            type:  'LOAD_TODOS_SUCCESS',
            payload:{
               todos: fakeTodos
            },
        }
        fetchMock.reset();
    });
});