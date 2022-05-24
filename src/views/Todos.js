import React, { useEffect, useState } from 'react';
import AddTask from '../components/AddTask';
import TodoItem from '../components/TodoItem';
import { addNewTodo, fetchTodos } from '../services/todos';
import './Todos.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchTodos();
      setTodos(resp);
    };
    fetchData();
  }, []);

  const handleNewTask = async (e) => {
    e.preventDefault();
    try {
      await addNewTodo(newTask);
      const resp = await fetchTodos();
      setTodos(resp);
      setNewTask('');
    } catch (e) {
      setError(e.message);
    }
  };


  return (
    <div className='todo-page'>
      {error && <p>{error}</p>}
      <h1>Your Tasks</h1>
      <p>Click an item to toggle complete/incomplete.</p>
      <AddTask {...{ newTask, setNewTask, handleNewTask }} />
      <TodoItem todos={todos} setTodos={setTodos} />
    </div>
  );
}
