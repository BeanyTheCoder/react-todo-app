import React from "react";

export default function Checkbox({
  state: { todos },
  setState: { setTodos },
  other: { index, element },
}) {
  function completeTodo(index) {
    let updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  }

  return (
    <>
      <input
        className="container__todos__todo__body__checkbox"
        type="checkbox"
        checked={element.isCompleted}
        onClick={() => {
          completeTodo(index);
        }}
        readOnly
      />
    </>
  );
}
