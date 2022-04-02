import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import { fetchTodos } from '../services/todos';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchTodos();
      setTodos(resp);
    };
    fetchData();
  }, []);

  // const handleCheckOff = async() => {
  //   const resp = await checkOffItem(id);
  // }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      )
      )}
    </div>
  );
}
