import React from "react";
import "./TodoList.css";

function ToDoList({ todos, onDelete }) {
  return (
    <div className="list-wrapper">
      <ul className="list-item">
        {todos.map((todo, index) => (
          <li key={index}>
            <button className=" checkbox fa-regular fa-square-check"></button>
            {todo}
            <button
              onClick={() => onDelete(index)}
              className="delete fa-solid fa-trash"
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
