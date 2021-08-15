import React, { useState } from 'react';
//import './NewTodoForm.css';
import {connect} from 'react-redux';
import {addTodoRequest} from './thunks';
import { getTodos } from './selectors';
import styled from 'styled-components';

const TodoContainer = styled.div`
border-radius: 8px;
padding: 16px;
text-align: center;
box-shadow: 0 4px 8px grey;
`;
const NewTodoInput = styled.input`
font-size: 16px;
padding: 8px;
border: none;
border-bottom: 2px solid #ddd;
border-radius: 8px;
width: 70%;
outline: none;
`;
const NewTodoButton = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
margin-left: 8px;
width: 20%;
background-color: #22ee22;
// `;
const NewTodoForm = ({todos, onCreatePressed}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <TodoContainer>
      <NewTodoInput
        //className="new-todo-input"
        type="text"
        placeholder="type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <NewTodoButton
        onClick = {()=>{
          const isDublicate= todos.some(todo => todo.text === inputValue);
          if(!isDublicate) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
       // className="new-todo-button"
      >
        Create todo
      </NewTodoButton>
    </TodoContainer>
  );
}
const mapStateToProps = state => ({
  todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
