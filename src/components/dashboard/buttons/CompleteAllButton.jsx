import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function CompleteAllButton({
  state: { todos, isCompletedNext },
  setState: { setTodos, setIsCompletedNext },
}) {
  function completeAllTodos() {
    let updatedTodos = todos.map((element) => {
      setIsCompletedNext(!isCompletedNext);
      return { ...element, isCompleted: isCompletedNext };
    });
    setTodos(updatedTodos);
  }

  return (
    <button
      onClick={completeAllTodos}
      className={
        todos.length > 0
          ? "container__dashboard__info__buttons__button"
          : "container__dashboard__info__buttons__button --disabled"
      }>
      {/* {isCompletedNext ? "Check All " : "Uncheck All "} */}
      {isCompletedNext ? (
        <FontAwesomeIcon icon={faListCheck} />
      ) : (
        <FontAwesomeIcon icon={faSquareXmark} />
      )}
    </button>
  );
}
