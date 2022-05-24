import React from 'react';

export default function AddTask({ newTask, setNewTask, handleNewTask }) {
  return (
    <div>
      <form onSubmit={handleNewTask}>
        <label>
          Add a Task:
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
