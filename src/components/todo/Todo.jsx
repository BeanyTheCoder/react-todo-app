import RemoveTodoButton from "./buttons/RemoveTodoButton";
import CompleteTodoButton from "./buttons/CompleteTodoButton";

export default function Todo(defaultPropset) {
  let {
    other: { element },
  } = defaultPropset;

  return (
    <li key={element.key} className="container__todos__todo">
      <div className="container__todos__todo__body">
        <CompleteTodoButton {...defaultPropset} />
        <p
          style={{
            textDecoration: element.isCompleted ? "line-through" : "none",
            opacity: element.isCompleted ? "0.35" : "1",
          }}
          className="container__todos__todo__body__text">
          {element.value}
        </p>
      </div>

      <RemoveTodoButton {...defaultPropset} />
    </li>
  );
}
