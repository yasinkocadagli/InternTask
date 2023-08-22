import React, { useState } from "react";
import ToDoList from "./TodoList";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";


function TodoForm() {
  const dispatch=useDispatch()
  const logoutHandler=(event)=>{
    event.preventDefault()

    dispatch(authActions.logout())
  }
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((todos, i) => i !== index);
    setTodos(newTodos);
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

      <ToDoList todos={todos} onDelete={removeTodo} />
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default TodoForm;
