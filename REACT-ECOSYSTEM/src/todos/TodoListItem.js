import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {todo?.isCompleted ?<p className="completed-button">completed</p> :
      <button
        onClick ={() => onCompletedPressed(todo.id)}
        className="completed-button"
      >
        Mark as completed
      </button>}
      <button
        onClick ={() => onRemovePressed(todo.id)}
        className="remove-button"
      >
        Remove Item
      </button>
    </div>
  </div>
);

export default TodoListItem;
