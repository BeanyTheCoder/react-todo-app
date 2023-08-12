import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddTodoButton({
  state: { todos },
  setState: { setTodos, setIsCompletedNext },
  reference: { todoInputRef },
}) {
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
  return (
    <>
      {" "}
      <button
        onClick={addTodo}
        className={
          todos.length < 20
            ? "container__dashboard__field__button"
            : "container__dashboard__field__button --disabled"
        }>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
}
