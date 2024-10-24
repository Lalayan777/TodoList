import { useState } from 'react';
import './App.css'; 
import TodoListFunc from './TodoList';
import TodoFormFunc from './TodoForm';
import TodoFuter from './TodoFuter';

function App() {
  const [todos, setTodos] = useState([
    {id: Math.random(), text: "Learn JS", isCompleted: false},
    {id: Math.random(), text: "Learn CSS", isCompleted: false},
    {id: Math.random(), text: "Learn HTML", isCompleted: false}
  ])
  return (
    <div className="App">
      <TodoFormFunc onAdd={(text)=>{
            setTodos([
              ...todos,
              {id: Math.random(), text: text, isCompleted: false}
            ])
      }} />
      <TodoListFunc 
      todos={todos}
      onDelete={(todo)=>{
          setTodos(todos.filter((t)=> t.id !== todo.id))
      }}
      onChange={(newTodo) => {
        setTodos(
          todos.map((todo)=>{
            if (todo.id === newTodo.id) {
              return newTodo
            }
            return todo
          })
        )
      }}
      />
      <TodoFuter todos={todos} onClear={()=>{
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }} />
    </div>
  );
}

export default App;
