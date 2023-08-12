import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
    <li key={element.key} className="container__todos__todo">
      <div className="container__todos__todo__body">
        <input
          className="container__todos__todo__body__checkbox"
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
          className="container__todos__todo__body__text">
          {element.value}
        </p>
      </div>

      <button
        className="container__todos__todo__button"
        onClick={() => {
          removeTodo(index);
        }}>
        <FontAwesomeIcon icon={faTrashCan} />{" "}
      </button>
    </li>
  );
}
