import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({
  state: { todos, isCompletedNext },
  stateChange: { setTodos, setIsCompletedNext },
}) {
  let todoInputRef = useRef();

  function addTodo() {
    if (!todoInputRef.current.value) {
      showError("Please input a value");
      return;
    }
    if (todos.length >= 20) {
      showError("Cannot have more than 20 tasks at a time");
      return;
    }
    let updatedTodos = [...todos];
    setTodos([
      ...updatedTodos,
      { value: todoInputRef.current.value, key: length, isCompleted: false },
    ]);

    todoInputRef.current.value = "";
    setIsCompletedNext(true);
  }

  function removeAllTodos() {
    setTodos([]);
  }

  function completeAllTodos() {
    let updatedTodos = todos.map((element) => {
      setIsCompletedNext(!isCompletedNext);
      return { ...element, isCompleted: isCompletedNext };
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <section className="container__dashboard">
        <h1>Todo App v1.0</h1>
        <section className="container__dashboard__field">
          {/* <p id="error" ref={errorRef}>e</p> */}
          <input
            className="container__dashboard__field__input"
            type="text"
            placeholder="Add new task"
            ref={todoInputRef}
          />
          <button
            onClick={addTodo}
            className={
              todos.length < 20
                ? "container__dashboard__field__button"
                : "container__dashboard__field__button --disabled"
            }>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </section>

        <section className="container__dashboard__info">
          <p>No. of tasks: {todos.length}</p>
          <div className="container__dashboard__info__buttons">
            <button
              onClick={removeAllTodos}
              className={
                todos.length > 0
                  ? "container__dashboard__info__buttons__button"
                  : "container__dashboard__info__buttons__button --disabled"
              }>
              Remove All
            </button>
            <button
              onClick={completeAllTodos}
              className={
                todos.length > 0
                  ? "container__dashboard__info__buttons__button"
                  : "container__dashboard__info__buttons__button --disabled"
              }>
              {isCompletedNext ? "Check All" : "Uncheck All"}
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
