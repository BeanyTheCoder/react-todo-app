import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function RemoveTodoButton({
  state: { todos },
  setState: { setTodos },
  other: { index },
}) {
  function removeTodo(index) {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <>
      <button
        className="container__todos__todo__button"
        onClick={() => {
          removeTodo(index);
        }}>
        <FontAwesomeIcon icon={faTrashCan} />{" "}
      </button>
    </>
  );
}
