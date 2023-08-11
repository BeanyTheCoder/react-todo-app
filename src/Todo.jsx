import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function Todo({
  state: { todos },
  stateChange: { setTodos },
  other: { element, index },
}) {
  function removeTodo(index) {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  function completeTodo(index) {
    let updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  }

  return (
    <li key={element.key}>
      <div className="todo-main">
        <input
          className="todo-checkbox"
          type="checkbox"
          checked={element.isCompleted}
          onClick={() => {
            completeTodo(index);
          }}
          readOnly
        />
        <p
          style={{
            textDecoration: element.isCompleted ? "line-through" : "none",
            opacity: element.isCompleted ? "0.35" : "1",
          }}
          className="todo-text">
          {element.value}
        </p>
      </div>

      <button
        className="todo-button"
        onClick={() => {
          removeTodo(index);
        }}>
        <FontAwesomeIcon icon={faTrashCan} />{" "}
      </button>
    </li>
  );
}
