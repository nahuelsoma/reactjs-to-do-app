import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };

// <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
//   <span
//     className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
//     onClick={props.onComplete}
//   >
//     ✔
//   </span>
//   <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
//     {props.text}
//   </p>
//   <span className="Icon Icon-delete" onClick={props.onDelete}>
//     X
//   </span>
// </li>
