import { useState, useRef } from "react";
import Dashboard from "./Dashboard";
import Todo from "./Todo";

import "./App.css";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [isCompletedNext, setIsCompletedNext] = useState(true);

  let errorRef = useRef();

  function showError(message) {
    // errorRef.current.innerText = message;
    // errorRef.current.style.display = " block;";
    // setTimeout(() => {
    //   errorRef.current.style.display = "none"
    // }, 1000);
    alert(message);
  }

  let dashboardProps = {
    state: {
      todos,
      isCompletedNext,
    },
    stateChange: {
      setTodos,
      setIsCompletedNext,
    },
  };

  return (
    <>
      <div className="container">
        <Dashboard {...dashboardProps} />

        <section
          className="container__todos"
          style={{
            borderTop: todos.length > 0 ? " #e6e6e6 2px solid" : "none",
          }}>
          <ul>
            {todos.map((element, index) => {
              let todoProps = {
                state: {
                  todos,
                },
                stateChange: {
                  setTodos,
                },
                other: {
                  element,
                  index,
                },
              };
              return <Todo {...todoProps} />;
            })}
          </ul>
        </section>

        {
          /* <p>
          Tasks pending:{" "}
          {todos.reduce((accum, curr) => {
            if (!curr.isCompleted) {
              accum += 1;
            }
            return accum;
          }, 0)}
        </p> */
        }
      </div>
    </>
  );
}
