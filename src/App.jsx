import { useState, useRef } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Todo from "./components/todo/Todo";

import "./App.css";

export default function App() {
  // default `todo` value for preview
  let [todos, setTodos] = useState([
    {
      value: "Refactor react todo app on Github",
      key: length,
      isCompleted: true,
    },

    { value: "Renew gym membership", key: length, isCompleted: false },
    { value: "Create a video for YouTube", key: length, isCompleted: false },
    { value: "Write a blog about new trends", key: length, isCompleted: false },
    {
      value: "Send a project file to the client",
      key: length,
      isCompleted: false,
    },
  ]);
  let [isCompletedNext, setIsCompletedNext] = useState(true);

  let defaultPropset = {
    state: {
      todos,
      isCompletedNext,
    },
    setState: {
      setTodos,
      setIsCompletedNext,
    },
  };

  // for preview

  todos.push();
  todos.push();
  todos.push();
  todos.push();
  todos.push();

  return (
    <>
      <div className="container">
        <Dashboard {...defaultPropset} />

        <section
          className="container__todos"
          style={{
            borderTop: todos.length > 0 ? " #e6e6e6 2px solid" : "none",
          }}>
          <ul>
            {todos.map((element, index) => {
              // creates custom propset using defaultPropset
              let todoPropset = {
                ...defaultPropset,
                other: {
                  element,
                  index,
                },
              };
              return <Todo {...todoPropset} />;
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
