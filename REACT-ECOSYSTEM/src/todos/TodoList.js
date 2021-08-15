import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
// import './TodoList.css';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { getIsLoading, getIncompleteTodos, getCompleteTodos } from './selectors';
import {loadTodos, removeTodoRequest,updateTodoRequst} from './thunks';

const BigRedText= styled.div`
  font-size: 48px;
  color: #ff0000;
`;
const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;
const TodoList = ({completeTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const LoadingMessage = <div>loading...</div>;
  const content = (
    <ListWrapper>
    <NewTodoForm />
    <BigRedText>i am styled component</BigRedText>
    <h3>Completed:</h3>
    {completeTodos.map(todo => <TodoListItem key={todo?.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>)}
    <h3>Incompleted:</h3>
    {incompleteTodos.map(todo => <TodoListItem key={todo?.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>)}
  </ListWrapper>
);
return isLoading ? LoadingMessage : content;
}
const mapStateToProps = state => ({
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getIsLoading(state),
});
const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(updateTodoRequst(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
