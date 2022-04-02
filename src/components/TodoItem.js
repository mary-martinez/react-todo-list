import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo }) {
  return (
    <div>
      <h3 className={`complete-${todo.complete}`}>{todo.todo}</h3>
    </div>
  );
}
