import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [isCompletedNext, setIsCompletedNext] = useState(true);
  let todoInputRef = useRef();
  let errorRef = useRef();

  let length = todos.length;

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

  function showError(message) {
    // errorRef.current.innerText = message;
    // errorRef.current.style.display = " block;";
    // setTimeout(() => {
    //   errorRef.current.style.display = "none"
    // }, 1000);
    alert(message);
  }

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
      <div className="container">
        <section className="dashboard">
          <h1>Todo App v1.0</h1>
          <section className="input">
            {/* <p id="error" ref={errorRef}>e</p> */}
            <input type="text" placeholder="Add new task" ref={todoInputRef} />
            <button
              onClick={addTodo}
              className={todos.length < 20 ? "" : "disabled"}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </section>

          <section className="info">
            <p>No. of tasks: {todos.length}</p>
            <div className="buttons">
              <button
                onClick={removeAllTodos}
                className={todos.length > 0 ? "" : "disabled"}>
                Remove All
              </button>
              <button
                onClick={completeAllTodos}
                className={todos.length > 0 ? "" : "disabled"}>
                {isCompletedNext ? "Check All" : "Uncheck All"}
              </button>
            </div>
          </section>
        </section>

        <section
          className="todos"
          style={{
            borderTop: todos.length > 0 ? " #e6e6e6 2px solid" : "none",
          }}>
          <ul>
            {todos.map((element, index) => {
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
                        textDecoration: element.isCompleted
                          ? "line-through"
                          : "none",
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
            })}
          </ul>
        </section>

        {/* <p>
          Tasks pending:{" "}
          {todos.reduce((accum, curr) => {
            if (!curr.isCompleted) {
              accum += 1;
            }
            return accum;
          }, 0)}
        </p> */}
      </div>
    </>
  );
}
