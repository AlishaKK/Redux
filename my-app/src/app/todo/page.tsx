"use client"; // Only for Next.js 13, indicates a client component

// components/TodoComponent.tsx
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "@/store/todoSlice";
import { useState } from 'react';

const TodoComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new to-do"
          className="border border-gray-300 rounded-l-lg p-2 flex-grow"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b border-gray-200">
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              className={todo.completed ? "text-gray-400" : "text-black"}
            >
              {todo.task}
            </span>
            <div>
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="bg-yellow-500 text-white rounded px-2 mr-2 hover:bg-yellow-600"
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white rounded px-2 hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
