import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

export default function RemoveAllButton({
  state: { todos },
  setState: { setTodos },
}) {
  function removeAllTodos() {
    setTodos([]);
  }

  return (
    <button
      onClick={removeAllTodos}
      className={
        todos.length > 0
          ? "container__dashboard__info__buttons__button"
          : "container__dashboard__info__buttons__button --disabled"
      }>
      {/* Remove Todo */}
      <FontAwesomeIcon icon={faEraser} />
    </button>
  );
}
