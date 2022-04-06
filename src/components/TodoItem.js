import React, { useState } from 'react';
import { checkOffItem, deleteItem, fetchTodos } from '../services/todos';
import './TodoItem.css';

export default function TodoItems({ todos, setTodos }) {
  const [error, setError] = useState('');
  const handleCheckOff = async (status, id) => {
    // const status = !taskStatus;
    try {
      await checkOffItem(status, id);
      // console.log('handleCheckOff click');
      const updated = await fetchTodos();
      setTodos(updated);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      const updated = await fetchTodos();
      setTodos(updated);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className='todo-list'>
      {error && <h3>{error}</h3>}
      {todos.map((todo) => (
        <div key={todo.id} className='todo-item'>
          <h3 className={`complete-${todo.complete}`} onClick={() => handleCheckOff(!todo.complete, todo.id)} >{todo.todo}</h3>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      )
      )}
    </div>
  );
}
