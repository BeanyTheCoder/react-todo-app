import { useRef } from "react";

import AddTodoButton from "./buttons/AddTodoButton";
import RemoveAllButton from "./buttons/RemoveAllButton";
import CompleteAllButton from "./buttons/CompleteAllButton";

export default function Dashboard(defaultPropset) {
  let todoInputRef = useRef();

  // destructures the defaultPropset passed for use in THIS component
  let {
    state: { todos, isCompletedNext },
    setState: { setTodos, setIsCompletedNext },
  } = defaultPropset;

  // creates a custom propset for use in CHILD component, using defaultPropset
  let addTodoPropset = {
    ...defaultPropset,
    reference: {
      todoInputRef,
    },
  };

  return (
    <>
      <section className="container__dashboard">
        <h1>Todo App v1.0</h1>
        <section className="container__dashboard__field">
          <input
            className="container__dashboard__field__input"
            type="text"
            placeholder="Add new task"
            ref={todoInputRef}
          />
          <AddTodoButton {...addTodoPropset} />
        </section>

        <section className="container__dashboard__info">
          {/* <p>No. of tasks: {todos.length}</p> */}
          <p>
            Tasks completed:{" "}
            {todos.reduce((accum, curr) => {
              if (curr.isCompleted) {
                accum += 1;
              }
              return accum;
            }, 0)}
          </p>

          <div className="container__dashboard__info__buttons">
            <RemoveAllButton {...defaultPropset} />
            <CompleteAllButton {...defaultPropset} />
          </div>
        </section>
      </section>
    </>
  );
}
