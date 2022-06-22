import React from "react";
import "./TodoList.css";

function TodoList({
  error,
  loading,
  searchedTodos,
  totalTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) {
  const renderFunc = children || render;

  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!loading && !!totalTodos && !searchedTodos.length && onEmptySearchResults()}
      {!loading && !!totalTodos && !!searchedTodos.length && (
        <ul>{searchedTodos.map((todo) => renderFunc(todo))}</ul>
      )}
    </section>
  );
}

export { TodoList };
