import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import {connect} from 'react-redux';
import {loadTodos, removeTodoRequest,updateTodoRequst} from './thunks';

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const LoadingMessage = <div>loading...</div>;
  const content = (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>)}
  </div>
);
return isLoading ? LoadingMessage : content;
}
const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(updateTodoRequst(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
