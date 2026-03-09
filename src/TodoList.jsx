import React, { useState } from 'react'
export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Master JavaScript' },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
        <ul>
            {todos.map(todo => ( 
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>  
    </div>
  )
}
