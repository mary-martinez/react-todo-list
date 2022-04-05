import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { checkOffItem, fetchTodos } from '../services/todos';
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

  return (
    <div>
      {error && <h3>{error}</h3>}
      {todos.map((todo) => (
        <div key={todo.id} >
          <h3 className={`complete-${todo.complete}`} onClick={() => handleCheckOff(!todo.complete, todo.id)} >{todo.todo}</h3>
        </div>
      )
      )}
    </div>
  );
}
