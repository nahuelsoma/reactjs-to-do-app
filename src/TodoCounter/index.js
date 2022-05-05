import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if (totalTodos) {
    return (
      <h2 className="TodoCounter">
        {completedTodos} of {totalTodos} tasks completed
      </h2>
    );
  } else {
    return <h2 className="TodoCounter">You have no pending tasks</h2>;
  }
}

export { TodoCounter };
