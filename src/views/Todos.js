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



  return (
    <div>
      <TodoItem todos={todos} setTodos={setTodos} />
    </div>
  );
}
