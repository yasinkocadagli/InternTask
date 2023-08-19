import React, { useState } from "react";
import ToDoList from "./TodoList";

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((todo, i) => i !== index);
    setTodos(newTodo);
  };


  

  return (
    <div>
      <h1>ToDo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Ekle</button>
      </div>

      <ToDoList todos={todos}  onDelete={removeTodo}/>
    </div>
  );
}

export default TodoForm;
