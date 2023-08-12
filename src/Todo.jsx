import { useState, useRef } from "react";

import RemoveTodoButton from "./buttons/RemoveTodoButton";
import Checkbox from "./Checkbox";

export default function Todo({
  state: { todos },
  setState: { setTodos },
  other: { element, index },
}) {
  return (
    <li key={element.key} className="container__todos__todo">
      <div className="container__todos__todo__body">
        <Checkbox
          {...{
            state: { todos },
            setState: { setTodos },
            other: { index, element },
          }}
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

      <RemoveTodoButton
        {...{ state: { todos }, setState: { setTodos }, other: { index } }}
      />
    </li>
  );
}
