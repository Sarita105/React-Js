import React from 'react';
import styled from 'styled-components';
//import './TodoListItem.css';

const TodoItemContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;
export const getRedBorder = (startingDate, currentDate) =>
(startingDate > new Date(currentDate - 86400000 * 5)
? 'none'
: '2px solid red');
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => getRedBorder( new Date(props.createdAt), Date.now())};`;
// const TodoItemContainerWithWarning = styled(TodoItemContainer)`
//     border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
//         ? 'none'
//         : '2px solid red')};
// `;
const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;
`;
const Buttons = styled.button`
font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;
const CompleteButton = styled(Buttons)`
    background-color: #22ee22;
`;
const CompleteP = styled(Buttons)`
    background-color: #22ee22;
`;
const RemoveButton = styled(Buttons)`
    background-color: #ee2222;
    margin-left: 8px;
`;
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
  return(
  <Container createdAt = {todo?.createdAt}>
    <h3>{todo?.text}</h3>
    <p>
      Created at:&nbsp;
      {(new Date(todo?.createdAt)).toLocaleDateString()}
    </p>
    <ButtonsContainer>
      {todo?.isCompleted ?<CompleteP>completed</CompleteP> :
      <CompleteButton
        onClick ={() => onCompletedPressed(todo.id)}
        // className="completed-button"
      >
        Mark as completed
      </CompleteButton>}
      <RemoveButton
        onClick ={() => onRemovePressed(todo.id)}
        // className="remove-button"
      >
        Remove Item
      </RemoveButton>
    </ButtonsContainer>
  </Container>
)};

export default TodoListItem;
